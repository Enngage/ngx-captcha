import {
    AfterViewInit,
    ChangeDetectorRef,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
    Renderer2,
    OnDestroy,
    AfterViewChecked
} from '@angular/core';

declare var grecaptcha: any;

export abstract class BaseReCaptchaComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy, AfterViewChecked {

    /**
    * Name of the global callback
    */
    protected abstract readonly windowOnLoadCallback: string;

    /**
     * Name of the global reCaptcha property
     */
    protected readonly globalReCaptchaProperty = 'grecaptcha';

    protected readonly windowLoadCallbackName = `ngxasefsaefes${this.getPseudoUniqueNumber()}`;

    /**
      * Google's site key.
      * You can find this under https://www.google.com/recaptcha
      */
    @Input() siteKey: string;

    /**
     * Type
     */
    @Input() type: 'audio' | 'image' = 'image';

    /**
     * Language code. Auto-detects the user's language if unspecified.
     */
    @Input() hl: string;

    /**
    * Tab index
    */
    @Input() tabIndex = 0;

    /**
     * Called when captcha receives successful response.
     * Captcha response token is passed to event.
     */
    @Output() success = new EventEmitter<string>();

    /**
    * Called when captcha is loaded. Event receives id of the captcha
    */
    @Output() load = new EventEmitter<number>();

    @ViewChild('captchaWrapperElem') captchaWrapperElem: ElementRef;
    @ViewChild('captchaScriptElem') captchaScriptElem: ElementRef;

    /**
     * Captcha element
     */
    protected captchaElem?: HTMLElement;

    /**
     * Holds last response value
     */
    protected currentResponse?: string;

    /**
     * Id of the captcha
     */
    protected captchaId: number;

    /**
     * If enabled, captcha will reset after receiving success response. This is useful
     * when invisible captcha need to be resolved multiple times on same page
     */
    protected resetCaptchaAfterSuccess = false;

    /**
     * Indicates if captcha is loaded
     */
    public isLoaded = false;

    /**
    * Reference to global reCaptcha API
    */
    public reCaptchaApi;

    public captchaElemId: string;

    constructor(
        protected cdr: ChangeDetectorRef,
        protected renderer: Renderer2
    ) {
    }

    /**
    * Gets reCaptcha properties
    */
    protected abstract getCaptchaProperties(): any;

    ngOnInit(): void {
        this.createNewCaptchaElem();
        console.log(this.windowLoadCallbackName);
        // we need to patch the callback through global variable, otherwise callback is not accessible
        window[this.windowLoadCallbackName] = this.onloadCallback.bind(this);

    }

    ngAfterViewInit(): void {
        // create new captcha elem
        console.log('view init');

        // ensure reCatpcha script is registered
        this.ensureReCaptchaScript();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.isLoaded) {
            // captcha was already loaded => reload it
            console.log('reload');
            this.reloadCaptcha();
        }
        // do nothing otherwise
    }

    ngOnDestroy() {
    //    window[this.globalReCaptchaProperty] = undefined;
      //  window[this.windowLoadCallbackName] = undefined;
       // window['captchaElem'] = undefined;
    }

    private renderTest = false;
    ngAfterViewChecked(): void {
        if (this.renderTest) {
           // this.renderReCaptcha();
            this.renderTest = false;
           // this.cdr.detectChanges();
        }
    }

    /**
     * Gets captcha response as per reCaptcha docs
    */
    getResponse(): string {
        return this.reCaptchaApi.getResponse(this.captchaId);
    }

    /**
     * Gets Id of captcha widget
    */
    getCaptchaId(): number {
        return this.captchaId;
    }

    /**
    * Resets captcha
    */
    resetCaptcha(): void {
        this.reCaptchaApi.reset(this.captchaId);
    }

    /**
     * Gets last submitted captcha response
    */
    getCurrentResponse(): string | undefined {
        return this.currentResponse;
    }

    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
    */
    reloadCaptcha(): void {
        this.ngOnInit();

        this.ensureReCaptchaScript();
    }

    protected ensureCaptchaElem(): void {
        const captchaElem = document.getElementById(this.captchaElemId);

        if (!captchaElem) {
            throw Error(`Captcha element with id '${this.captchaElemId}' was not found`);
        }

        this.captchaElem = captchaElem;
    }

    /**
     * Responsible for instantiating captcha element
    */
    protected renderReCaptcha(): void {
        this.captchaId = this.reCaptchaApi.render(window['captchaElem'], this.getCaptchaProperties());
    }

    /**
     * Called when captcha receives response
     * @param callback Callback
     */
    protected handleCallback(callback: any): void {
        this.currentResponse = callback;
        this.success.next(callback);

        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    }

    /**
     * Registers reCaptcha script if its not available
    */
    protected ensureReCaptchaScript(): void {
        if (this.isReCaptchaApiDefined()) {
            // captcha script is already loaded
            this.load.next();
            this.isLoaded = true;

            // assign api
            this.reCaptchaApi = grecaptcha;

            this.renderReCaptcha();
           // this.cdr.detectChanges();
           // this.renderTest = true;

        } else {
            this.registerReCaptchaScript();
        }
    }

    /**
     * Add script to page with reference to captcha API. This has to be done manually
     * as we want to avoid adding script to main index.html
    */
    protected registerReCaptchaScript(): void {
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src =
            `https://www.google.com/recaptcha/api.js?onload=${this.windowLoadCallbackName}&render=explicit${this.getLanguageParam()}`;
        script.async = true;
        script.defer = true;

        this.captchaScriptElem.nativeElement.appendChild(script);
    }

    protected getLanguageParam(): string {
        if (!this.hl) {
            return '';
        }

        return `&hl=${this.hl}`;
    }


    private initCaptchaElemId(): void {
        this.captchaElemId = `ngx-captcha-${this.getPseudoUniqueNumber()}`;
    }

    private getPseudoUniqueNumber(): number {
        return new Date().getUTCMilliseconds();
    }

    /**
     * Checks if reCaptcha Api is defined. It may happen that when navigating from angular component to another
     * via router, the Api was already loaded previously. In such cases, do not render script again.
    */
    private isReCaptchaApiDefined(): boolean {
        if (!window[this.globalReCaptchaProperty]) {
            return false;
        }
        return true;
    }

    /**
    * Called when google's recaptcha script is ready
    */
    onloadCallback(): void {
        console.log('LOAD');
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecaptcha;

        if (!this.reCaptchaApi) {
            throw Error(`ReCaptcha Api was not initialized correctly`);
        }

        // loaded flag
        this.isLoaded = true;

        // fire load event
        this.load.next();

        // render captcha
       // this.renderTest = true;
       // this.cdr.detectChanges();
        this.renderReCaptcha();
    }

    private createNewCaptchaElem(): void {
        // create new element and append it to document
        if (this.captchaElem) {
            this.renderer.removeChild(this.captchaWrapperElem.nativeElement, this.captchaElem);
        }

        // update elem id
        this.initCaptchaElemId();

        this.captchaWrapperElem.nativeElement.innerHTML = '';

        const newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;

        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);

        // update captcha elem
        this.ensureCaptchaElem();
        window['captchaElem'] = null;
        window['captchaElem'] = newElem;

        this.cdr.detectChanges();

    }
}

