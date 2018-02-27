import {
    AfterViewInit,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';

declare var grecaptcha: any;

export abstract class BaseReCaptchaComponent implements OnInit, AfterViewInit, OnChanges {

    /**
    * Name of the global callback
    */
    protected abstract readonly windowOnLoadCallback: string;

    /**
     * Name of the global reCaptcha property
     */
    protected readonly globalReCaptchaProperty = 'grecaptcha';

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
    @ViewChild('captchaElem') captchaElem: HTMLElement;
    @ViewChild('captchaScriptElem') captchaScriptElem: ElementRef;

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

    public captchaElemId = 'ngx-recaptcha-4242442';

    constructor(
    ) {
    }

    ngOnInit(): void {
        // we need to patch the callback through global variable, otherwise callback is not accessible
        window[this.windowOnLoadCallback] = this.onloadCallback.bind(this);
    }

    ngAfterViewInit(): void {
        // ensure captcha elem id is set
        this.ensureCaptchaElem();

        // ensure reCatpcha script is registered
        this.ensureReCaptchaScript();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.siteKey && !changes.siteKey.isFirstChange() && (changes.sitekey.currentValue !== changes.siteKey.previousValue)) {
            // reset captcha if site key changed
            this.resetCaptcha();
        }
    }

    /**
     * Gets captcha response as per reCaptcha docs
    */
    getResponse(): string {
        return this.reCaptchaApi.getRespose(this.captchaId);
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
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
    */
    reloadCaptcha(): void {
        // unset global recaptcha
        window[this.globalReCaptchaProperty] = undefined;

        // create new captcha elem
        this.createNewCapchaElem();

        // ensure script is reloaded
        this.ensureReCaptchaScript();
    }

    protected ensureCaptchaElem(): void {
        this.captchaElem = document.getElementById(this.captchaElemId);

        if (!this.captchaElem) {
            throw Error(`Captcha element with id '${this.captchaElemId}' was not found`);
        }
    }

    /**
    * Gets reCaptcha properties
    */
    protected getCaptchaProperties(): any;

    /**
     * Responsible for instantiating captcha element
    */
    protected renderReCaptcha(): void {
        this.captchaId = this.reCaptchaApi.render(this.captchaElem, this.getCaptchaProperties());
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

            // render captcha
            this.renderReCaptcha();
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
            `https://www.google.com/recaptcha/api.js?onload=${this.windowOnLoadCallback}&render=explicit${this.getLanguageParam()}`;
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
    private onloadCallback(): void {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecaptcha;

        if (!this.reCaptchaApi) {
            throw Error(`ReCaptcha Api was not initialized correctly`);
        }

        // loaded flag
        this.isLoaded = true;

        // fire load event
        this.load.next();

        // render actual captcha
        this.renderReCaptcha();
    }

    private createNewCapchaElem(): void {
        // first remove the old HTML from current captcha elem
        this.captchaWrapperElem.nativeElement.innerHTML = '';

        // create new element and append it to document
        const newElem = document.createElement('div');
        newElem.id = this.captchaElemId;

        // add new elem to DOM
        this.captchaWrapperElem.nativeElement.appendChild(newElem);

        // update captcha elem
        this.captchaElem = newElem;
    }
}

