import {
  Component,
  forwardRef,
  Injector,
  Input,
  NgZone,
  OnChanges,
  Optional,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponent } from './base-recaptcha.component';

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
  ]
})
export class InvisibleReCaptchaComponent extends BaseReCaptchaComponent implements OnChanges {

  /**
   * This size representing invisible captcha
   */
  protected readonly size = 'invisible';

  /**
   * Badge
   */
  @Input() badge: 'bottomright' | 'bottomleft' | 'inline' = 'bottomright';

  /**
   * Language code. Auto-detects the user's language if unspecified.
   */
  @Input() hl: string;

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
    this.reCaptchaApi.execute(this.captchaId);
  }

  protected captchaSpecificSetup(): void {
  }

  /**
  * Gets reCaptcha properties
  */
  protected getCaptchaProperties(): any {
    return {
      'sitekey': this.siteKey,
      'callback': (response) => this.zone.run(() => this.handleCallback(response)),
      'badge': this.badge,
      'type': this.type,
      'tabindex': this.tabIndex,
      'size': this.size
    };
  }
}

