import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Renderer2,
  SimpleChanges,
  NgZone,
} from '@angular/core';

import { BaseReCaptchaComponent } from './base-recaptcha.component';
import { ReCaptchaType } from './recaptcha-type.enum';
import { NgxCaptchaConfig } from './recaptcha.config';

@Component({
  selector: 'ngx-recaptcha2',
  template: `
  <div #captchaScriptElem></div>
  <div #captchaWrapperElem></div>`
})
export class ReCaptcha2Component extends BaseReCaptchaComponent implements OnChanges, OnDestroy {

  /**
  * Name of the global expire callback
  */
  protected readonly windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';

  /**
  * Name of the global error callback
  */
  protected readonly windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';

  /**
   * Theme
   */
  @Input() theme: 'dark' | 'light' = 'light';

  /**
  * Size
  */
  @Input() size: 'compact' | 'normal' = 'normal';

  /**
   * Language code. Auto-detects the user's language if unspecified.
   */
  @Input() hl: string;

  /**
  * Expired callback
  */
  @Output() expire = new EventEmitter<void>();

  /**
  * Error callback
  */
  @Output() error = new EventEmitter<void>();

  constructor(
    protected renderer: Renderer2,
    protected zone: NgZone,
    @Optional() protected config: NgxCaptchaConfig,
  ) {
    super(renderer, zone, ReCaptchaType.ReCaptcha2, config);
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();

    window[this.windowOnErrorCallbackProperty] = {};
    window[this.windowOnExpireCallbackProperty] = {};
  }

  protected captchaSpecificSetup(): void {
    this.registerCallbacks();
  }

  /**
   * Gets reCaptcha properties
  */
  protected getCaptchaProperties(): any {
    return {
      'sitekey': this.siteKey,
      'callback': (response) => this.handleCallback(response),
      'expired-callback': () => this.handleExpireCallback(),
      'error-callback': () => this.handleErrorCallback(),
      'theme': this.theme,
      'type': this.type,
      'size': this.size,
      'tabindex': this.tabIndex
    };
  }

  /**
   * Registers global callbacks
  */
  private registerCallbacks(): void {
    window[this.windowOnErrorCallbackProperty] = this.handleErrorCallback.bind(this);
    window[this.windowOnExpireCallbackProperty] = this.handleExpireCallback.bind(this);
  }

  /**
   * Handles error callback
  */
  private handleErrorCallback(): void {
    this.error.next();
  }

  /**
   * Handles expired callback
   */
  private handleExpireCallback(): void {
    this.expire.next();

    // reset captcha on expire callback
    this.resetCaptcha();
  }
}

