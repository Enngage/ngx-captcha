import {
    AfterViewInit,
    ElementRef,
    EventEmitter,
    Injector,
    Input,
    NgZone,
    OnChanges,
    Output,
    Renderer2,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';

export abstract class BaseReCaptchaComponent implements OnChanges, ControlValueAccessor, AfterViewInit {

    /**
    * Prefix of the captcha element
    */
    protected readonly captchaElemPrefix = 'ngx_captcha_id_';

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

    /**
    * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
    */
    @Output() ready = new EventEmitter<void>();

    @ViewChild('captchaWrapperElem') captchaWrapperElem: ElementRef;
    @ViewChild('captchaScriptElem') captchaScriptElem: ElementRef;

    /**
    * Indicates if captcha should be set on load
    */
    private setupAfterLoad = false;

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
    * Captcha type
    */
    protected abstract recaptchaType: ReCaptchaType;

    /**
    * Required by ControlValueAccessor
    */
    protected onChange: (value: string | undefined) => void;
    protected onTouched: (value: string | undefined) => void;

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
    * Form Control to be enable usage in reactive forms
    */
    public control?: FormControl;

    protected constructor(
        protected renderer: Renderer2,
        protected zone: NgZone,
        protected injector: Injector,
        protected scriptService: ScriptService,
    ) { }

    ngAfterViewInit() {
        this.control = this.injector.get(NgControl).control;
    }

    /**
    * Gets reCaptcha properties
    */
    protected abstract getCaptchaProperties(): any;

    /**
    * Used for captcha specific setup
    */
    protected abstract captchaSpecificSetup(): void;

    ngOnChanges(changes: SimpleChanges): void {
        // cleanup scripts if language changed because they need to be reloaded
        if (changes && changes.hl) {
            if (!changes.hl.firstChange && (changes.hl.currentValue !== changes.hl.previousValue)) {
                this.scriptService.cleanup();
            }
        }

        this.setupComponent();
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
    getCaptchaId(): number | undefined {
        return this.captchaId;
    }

    /**
    * Resets captcha
    */
    resetCaptcha(): void {
        this.zone.run(() => {
            this.onChange(undefined);
            this.onTouched(undefined);
        });
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

        // run outside angular zone due to timeout issues when testing
        // details: https://github.com/Enngage/ngx-captcha/issues/26
        this.zone.runOutsideAngular(() => {
            this.captchaId = this.reCaptchaApi.render(this.captchaElemId, this.getCaptchaProperties());
            this.ready.next();
        });
    }

    /**
    * Called when captcha receives response
    * @param callback Callback
    */
    protected handleCallback(callback: any): void {
        this.currentResponse = callback;
        this.success.next(callback);

        this.zone.run(() => {
            this.onChange(callback);
            this.onTouched(callback);
        });

        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    }

    private getPseudoUniqueNumber(): number {
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
    }

    private setupComponent(): void {
        // captcha specific setup
        this.captchaSpecificSetup();

        // create captcha wrapper
        this.createAndSetCaptchaElem();

        this.scriptService.registerCaptchaScript('explicit', (grecaptcha) => {
            this.onloadCallback(grecaptcha);
        }, this.hl);
    }

    /**
    * Called when google's recaptcha script is ready
    */
    private onloadCallback(grecapcha: any): void {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecapcha;

        if (!this.reCaptchaApi) {
            throw Error(`ReCaptcha Api was not initialized correctly`);
        }

        // loaded flag
        this.isLoaded = true;

        // fire load event
        this.load.next();

        // render captcha
        this.renderReCaptcha();

        // setup component if it was flagged as such
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

    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     */
    public writeValue(obj: any): void { }

    /**
     * This method helps us tie together recaptcha and our formControl values
     */
    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
    * At some point we might be interested whether the user has touched our component
    */
    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}

