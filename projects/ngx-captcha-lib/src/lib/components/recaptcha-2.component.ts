import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Injector,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponentDirective } from './base-re-captcha-component.directive';

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
export class ReCaptcha2Component extends BaseReCaptchaComponentDirective implements OnChanges, OnDestroy {

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

  @ViewChild('captchaWrapperElem', { static: false}) captchaWrapperElem: ElementRef;

  protected recaptchaType: ReCaptchaType = ReCaptchaType.ReCaptcha2;

  constructor(
    protected renderer: Renderer2,
    protected zone: NgZone,
    protected injector: Injector,
    protected scriptService: ScriptService,
    @Inject(PLATFORM_ID) protected platformId: Object
  ) {
    super(renderer, zone, injector, scriptService, platformId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window[this.windowOnErrorCallbackProperty] = {};
      window[this.windowOnExpireCallbackProperty] = {};
    }
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
    if (isPlatformBrowser(this.platformId)) {
      window[this.windowOnErrorCallbackProperty] = super.handleErrorCallback.bind(this);
      window[this.windowOnExpireCallbackProperty] = super.handleExpireCallback.bind(this);
    }
  }
}

