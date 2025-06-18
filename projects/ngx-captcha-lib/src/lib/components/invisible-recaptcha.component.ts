import {
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Input,
  NgZone,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponentDirective } from './base-re-captcha-component.directive';

@Component({
    selector: 'ngx-invisible-recaptcha',
    template: `
  <div #captchaWrapperElem></div>`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InvisibleReCaptchaComponent),
            multi: true,
        }
    ],
    standalone: false
})
export class InvisibleReCaptchaComponent extends BaseReCaptchaComponentDirective implements OnChanges {

  /**
   * This size representing invisible captcha
   */
  protected readonly size = 'invisible';

  /**
   * Theme
   */
  @Input() theme: 'dark' | 'light' = 'light';

  /**
   * Badge
   */
  @Input() badge: 'bottomright' | 'bottomleft' | 'inline' = 'bottomright';

  @ViewChild('captchaWrapperElem', { static: false }) captchaWrapperElem?: ElementRef;

  protected recaptchaType: ReCaptchaType = ReCaptchaType.InvisibleReCaptcha;

  constructor(
    protected renderer: Renderer2,
    protected zone: NgZone,
    protected injector: Injector,
    protected scriptService: ScriptService
  ) {
    super(renderer, zone, injector, scriptService);
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  /**
   * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
   */
  execute(): void {
    // execute captcha
    this.zone.runOutsideAngular(() => this.reCaptchaApi.execute(this.captchaId));
  }

  protected captchaSpecificSetup(): void {
  }

  /**
  * Gets reCaptcha properties
  */
  protected getCaptchaProperties(): any {
    return {
      'sitekey': this.siteKey,
      'callback': (response: any) => this.zone.run(() => this.handleCallback(response)),
      'expired-callback': () => this.zone.run(() => this.handleExpireCallback()),
      'error-callback': () => this.zone.run(() => this.handleErrorCallback()),
      'badge': this.badge,
      'type': this.type,
      'tabindex': this.tabIndex,
      'size': this.size,
      'theme': this.theme
    };
  }


}

