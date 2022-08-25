import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  InjectFlags,
  Injector,
  Input,
  NgZone,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
} from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
} from "@angular/forms";

import { ReCaptchaType } from "../models/recaptcha-type.enum";
import { ScriptService } from "../services/script.service";

@Directive()
export abstract class BaseReCaptchaComponentDirective
  implements OnChanges, ControlValueAccessor, AfterViewInit, AfterViewChecked
{
  /**
   * Prefix of the captcha element
   */
  protected readonly captchaElemPrefix = "ngx_captcha_id_";

  private setupCaptcha: boolean = true;

  /**
   * Google's site key.
   * You can find this under https://www.google.com/recaptcha
   */
  @Input() siteKey: string;

  /**
   * Indicates if global domain 'recaptcha.net' should be used instead of default domain ('google.com')
   */
  @Input() useGlobalDomain: boolean = false;

  @Input() useEnterprise: boolean = false;

  /**
   * Type
   */
  @Input() type: "audio" | "image" = "image";

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
  @Output() load = new EventEmitter<void>();

  /**
   * Called when captcha is reset.
   */
  @Output() reset = new EventEmitter<void>();

  /**
   * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
   */
  @Output() ready = new EventEmitter<void>();

  /**
   * Error callback
   */
  @Output() error = new EventEmitter<void>();

  /**
   * Expired callback
   */
  @Output() expire = new EventEmitter<void>();

  abstract captchaWrapperElem?: ElementRef;

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
  public control?: AbstractControl | null;

  protected constructor(
    protected renderer: Renderer2,
    protected zone: NgZone,
    protected injector: Injector,
    protected scriptService: ScriptService
  ) {}

  ngAfterViewInit() {
    this.control = this.injector.get<NgControl | undefined>(
      NgControl,
      undefined,
      InjectFlags.Optional
    )?.control;
  }

  ngAfterViewChecked(): void {
    if (this.setupCaptcha) {
      this.setupCaptcha = false;
      this.setupComponent();
    }
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
      // cleanup scripts when language changes
      if (
        !changes.hl.firstChange &&
        changes.hl.currentValue !== changes.hl.previousValue
      ) {
        this.scriptService.cleanup();
      }
    }

    if (changes && changes.useGlobalDomain) {
      // cleanup scripts when domain changes
      if (
        !changes.useGlobalDomain.firstChange &&
        changes.useGlobalDomain.currentValue !==
          changes.useGlobalDomain.previousValue
      ) {
        this.scriptService.cleanup();
      }
    }

    this.setupCaptcha = true;
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
      // reset captcha using Google js api
      this.reCaptchaApi.reset();

      // required due to forms
      this.onChange(undefined);
      this.onTouched(undefined);

      // trigger reset event
      this.reset.next();
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
      // to fix reCAPTCHA placeholder element must be an element or id
      // https://github.com/Enngage/ngx-captcha/issues/96
      setTimeout(() => {
        this.captchaId = this.reCaptchaApi.render(
          this.captchaElemId,
          this.getCaptchaProperties()
        );
        this.ready.next();
      }, 0);
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

    this.scriptService.registerCaptchaScript(
      {
        useGlobalDomain: this.useGlobalDomain,
        useEnterprise: this.useEnterprise,
      },
      "explicit",
      (grecaptcha) => {
        this.onloadCallback(grecaptcha);
      },
      this.hl
    );
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

    if (!this.captchaWrapperElem) {
      throw Error(`Captcha DOM element is not initialized`);
    }

    // remove old html
    this.captchaWrapperElem.nativeElement.innerHTML = "";

    // create new wrapper for captcha
    const newElem = this.renderer.createElement("div");
    newElem.id = this.captchaElemId;

    this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);

    // when use captcha in cdk stepper then throwing error Captcha element with id 'ngx_captcha_id_XXXX' not found
    // to fix it checking ensureCaptchaElem in timeout so that its check in next call and its able to find element
    setTimeout(() => {
      // update captcha elem
      if (this.captchaElemId) {
        this.ensureCaptchaElem(this.captchaElemId);
      }
    }, 0);
  }

  /**
   * To be aligned with the ControlValueAccessor interface we need to implement this method
   * However as we don't want to update the recaptcha, this doesn't need to be implemented
   */
  public writeValue(obj: any): void {}

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

  /**
   * Handles error callback
   */
  protected handleErrorCallback(): void {
    this.zone.run(() => {
      this.onChange(undefined);
      this.onTouched(undefined);
    });

    this.error.next();
  }

  /**
   * Handles expired callback
   */
  protected handleExpireCallback(): void {
    this.expire.next();

    // reset captcha on expire callback
    this.resetCaptcha();
  }
}
