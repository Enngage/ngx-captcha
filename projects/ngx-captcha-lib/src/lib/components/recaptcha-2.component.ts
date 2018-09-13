import {
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponent } from './base-recaptcha.component';

@Component({
  selector: 'ngx-recaptcha2',
  template: `
  <div #captchaWrapperElem></div>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReCaptcha2Component),
      multi: true,
    }
  ]
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

  protected recaptchaType: ReCaptchaType = ReCaptchaType.ReCaptcha2;

  constructor(
    protected renderer: Renderer2,
    protected zone: NgZone,
    protected injector: Injector,
    protected scriptService: ScriptService,
  ) {
    super(renderer, zone, injector, scriptService);
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  ngOnDestroy(): void {
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
      'callback': (response) => this.zone.run(() => this.handleCallback(response)),
      'expired-callback': () => this.zone.run(() => this.handleExpireCallback()),
      'error-callback': () => this.zone.run(() => this.handleErrorCallback()),
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
    this.zone.run(() => {
      this.onChange(undefined);
      this.onTouched(undefined);
    });

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

