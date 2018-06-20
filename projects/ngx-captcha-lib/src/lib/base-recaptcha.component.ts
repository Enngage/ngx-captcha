import {
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    Output,
    Renderer2,
    SimpleChanges,
    ViewChild,
} from '@angular/core';

import { ReCaptchaType } from './recaptcha-type.enum';
import { NgxCaptchaConfig } from './recaptcha.config';

declare var grecaptcha: any;

export abstract class BaseReCaptchaComponent implements OnChanges, OnDestroy {

    private setupAfterLoad = false;

    /**
    * Name of the global callback
    */
    protected readonly windowOnLoadCallbackProperty = 'ngx_onload_callback_' + this.getPseudoUniqueNumber();

    /**
     * Name of the global reCaptcha property
     */
    protected readonly globalReCaptchaProperty = 'grecaptcha';

    /**
     * Prefix of the captcha element
     */
    protected readonly captchaElemPrefix = 'ngx_captcha_id_';

    /**
      * Google's site key.
      * You can find this under https://www.google.com/recaptcha
      */
    protected _siteKey?: string;

    /**
    * Config to use
    */
    @Input() siteKey: string | (() => string);

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

    /**
    * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
    */
    @Output() ready = new EventEmitter<void>();

    @ViewChild('captchaWrapperElem') captchaWrapperElem: ElementRef;
    @ViewChild('captchaScriptElem') captchaScriptElem: ElementRef;

    /**
     * Captcha element
     */
    protected captchaElem?: HTMLElement;

    /**
     * Id of the captcha elem
     */
    protected captchaId?: number;

    /**
     * Holds last response value
     */
    protected currentResponse?: string;

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

    /**
     * Id of the DOM element wrapping captcha
     */
    public captchaElemId?: string;

    /**
     * Captcha type
     */
    protected abstract recaptchaType: ReCaptchaType;

    constructor(
        protected renderer: Renderer2,
        protected zone: NgZone,
        protected globalConfig?: NgxCaptchaConfig,
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

    private getGlobalSiteKey(): string {
        if (this.globalConfig) {
            // Invisible captcha
            if (this.recaptchaType === ReCaptchaType.InvisibleReCaptcha) {
                if (!this.globalConfig.invisibleCaptchaSiteKey) {
                    throw Error(`SiteKey for invisible reCaptcha is not set!`);
                }

                if (this.globalConfig.invisibleCaptchaSiteKey instanceof Function) {
                    return this.globalConfig.invisibleCaptchaSiteKey();
                } else {
                    return this.globalConfig.invisibleCaptchaSiteKey;
                }

                // recaptcha 2
            } else if (this.recaptchaType === ReCaptchaType.ReCaptcha2) {
                if (!this.globalConfig.reCaptcha2SiteKey) {
                    throw Error(`SiteKey for reCaptcha2 is not set!`);
                }

                if (this.globalConfig.reCaptcha2SiteKey instanceof Function) {
                    return this.globalConfig.reCaptcha2SiteKey();
                } else {
                    return this.globalConfig.reCaptcha2SiteKey;
                }

            } else {
                throw Error(`Unsupported captcha type '${this.recaptchaType}'!`);
            }
        }
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (!this.siteKey) {
            // use global site key if key is not available
            this._siteKey = this.getGlobalSiteKey();
        } else {
            // use comnponent site key
            if (this.siteKey instanceof Function) {
                this._siteKey = this.siteKey();
            } else {
                this._siteKey = this.siteKey;
            }
        }
        this.setupComponent();
    }

    ngOnDestroy() {
        window[this.windowOnLoadCallbackProperty] = {};
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
    }

    /**
     * Responsible for instantiating captcha element
    */
    protected renderReCaptcha(): void {
        this.captchaId = this.reCaptchaApi.render(this.captchaElemId, this.getCaptchaProperties());
        this.ready.next();
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
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
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

        // create captcha wrapper
        this.createAndSetCaptchaElem();

        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = <any>(() => this.zone.run(
            this.onloadCallback.bind(this)
        ));

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

        // setup component if it was flagges as such
        if (this.setupAfterLoad) {
            this.setupAfterLoad = false;
            this.setupComponent();
        }
    }

    private generateNewElemId(): string {
        return this.captchaElemPrefix + this.getPseudoUniqueNumber();
    }

    private createAndSetCaptchaElem(): void {
        // generate new captcha id
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

}

