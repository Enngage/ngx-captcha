import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

import { BaseReCaptchaComponent } from './base-recaptcha.component';

@Component({
  selector: 'ngx-recaptcha2',
  template: `
  <div #captchaScriptElem></div>
  <div #captchaWrapperElem></div>`
})
export class ReCaptcha2Component extends BaseReCaptchaComponent implements OnChanges {

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
  @Input() expire = new EventEmitter<void>();

  /**
  * Error callback
  */
  @Input() error = new EventEmitter<void>();

  constructor(
    protected cdr: ChangeDetectorRef,
    protected renderer: Renderer2
  ) {
    super(cdr, renderer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
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
   * Handles error callback
  */
  private handleErrorCallback(): void {
    this.error.next();
  }

  /**
   * Handles expired callback
   */
  private handleExpireCallback(): void {
    // reset captcha on expire callback
    this.resetCaptcha();

    this.expire.next();
  }
}

