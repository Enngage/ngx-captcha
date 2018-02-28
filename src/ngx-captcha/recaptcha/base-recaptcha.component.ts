import {
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    Renderer2,
    SimpleChanges,
    ViewChild,
} from '@angular/core';

import { ReCaptchaType } from './recaptcha-type.enum';
import { NgxCaptchaConfig } from './recaptcha.config';

declare var grecaptcha: any;

export abstract class BaseReCaptchaComponent implements OnInit, OnChanges, OnDestroy {

    /**
    * Name of the global callback
    */
    protected readonly windowOnLoadCallbackProperty = 'ngx_onload_callback';

    /**
     * Name of the global reCaptcha property
     */
    protected readonly globalReCaptchaProperty = 'grecaptcha';

    /**
     * Name of the global property holding captcha element
     */
    protected readonly globalCaptchaElemName = 'ngx_onload_captcha_elem';

    /**
      * Google's site key.
      * You can find this under https://www.google.com/recaptcha
      */
    protected siteKey?: string;

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
    public reCaptchaApi?: any;

    public captchaElemId?: string;

    constructor(
        protected renderer: Renderer2,
        protected recaptchaType: ReCaptchaType,
        @Optional() protected config: NgxCaptchaConfig,
    ) {
    }

    /**
    * Gets reCaptcha properties
    */
    protected abstract getCaptchaProperties(): any;

    /**
     * Used for captcha specific setup
    */
    protected abstract captchaSpecificSetup(): void;

    ngOnInit(): void {
        if (this.recaptchaType === ReCaptchaType.InvisibleReCaptcha) {
            if (!this.config.invisibleCaptchaSiteKey) {
                throw Error(`SiteKey for invisible reCaptcha is not set!`);
            }

            this.siteKey = this.config.invisibleCaptchaSiteKey;
        } else if (this.recaptchaType === ReCaptchaType.ReCaptcha2) {
            if (!this.config.reCaptcha2SiteKey) {
                throw Error(`SiteKey for reCaptcha2 is not set!`);
            }

            this.siteKey = this.config.reCaptcha2SiteKey;
        } else {
            throw Error(`Unsupported captcha type '${this.recaptchaType}'!`);
        }

        this.setupComponent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.isLoaded) {
            this.setupComponent();
        }
    }

    ngOnDestroy() {
        window[this.windowOnLoadCallbackProperty] = {};
        window[this.globalCaptchaElemName] = {};
        window[this.globalReCaptchaProperty] = {};
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
        this.setupComponent();
    }

    protected ensureCaptchaElem(captchaElemId: string): void {
        const captchaElem = document.getElementById(captchaElemId);

        if (!captchaElem) {
            throw Error(`Captcha element with id '${captchaElemId}' was not found`);
        }

        // assign captcha alem
        this.captchaElem = captchaElem;

        // set global captcha elem
        this.setGlobalCaptchaElem(this.captchaElem);
    }

    /**
     * Responsible for instantiating captcha element
    */
    protected renderReCaptcha(): void {
        this.captchaId = this.reCaptchaApi.render(this.getGlobalCaptchaElem(), this.getCaptchaProperties());
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
        window[this.globalReCaptchaProperty] = {};
        this.reCaptchaApi = {};

        this.registerReCaptchaScript();
    }

    /**
     * Add script to page with reference to captcha API. This has to be done manually
     * as we want to avoid adding script to main index.html
    */
    protected registerReCaptchaScript(): void {
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src =
            `https://www.google.com/recaptcha/api.js?onload=${this.windowOnLoadCallbackProperty}&render=explicit${this.getLanguageParam()}`;
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

    private setupComponent(): void {
        // captcha specific setup
        this.captchaSpecificSetup();

        // create captcha wrapper and set it to global namespace
        this.createAndSetCaptchaElem();

        // we need to patch the callback through global variable, otherwise callback is not accessible
        window[this.windowOnLoadCallbackProperty] = this.onloadCallback.bind(this);

        // create and put reCaptcha script to page
        this.ensureReCaptchaScript();
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

        // render captcha
        this.renderReCaptcha();
    }

    private generateNewElemId(): string {
        return `ngx-captcha-id-${this.getPseudoUniqueNumber()}`;
    }

    private createAndSetCaptchaElem(): void {
        // generate new elem id
        this.captchaElemId = this.generateNewElemId();

        if (!this.captchaElemId) {
            throw Error(`Captcha elem Id is not set`);
        }

        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';

        // create new wrapper for captcha
        const newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;

        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);

        // update captcha elem
        this.ensureCaptchaElem(this.captchaElemId);
    }

    private setGlobalCaptchaElem(elem: HTMLElement): void {
        window[this.globalCaptchaElemName] = elem;
    }

    private getGlobalCaptchaElem(): HTMLElement {
        return window[this.globalCaptchaElemName];
    }
}

