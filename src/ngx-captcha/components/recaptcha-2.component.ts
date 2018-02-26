import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

declare var grecaptcha: any;

@Component({
  selector: 'ngx-recaptcha2',
  templateUrl: './recaptcha-2.component.html',
})
export class ReCaptcha2Component implements OnInit, AfterViewInit, OnChanges {

  /**
   * Name of the global callback variable
   */
  private readonly windowOnLoadCallback: string = 'ngx_captcha_onload_callback';

  /**
    * Google's site key.
    * You can find this under https://www.google.com/recaptcha
    */
  @Input() siteKey: string;

  /**
   * Theme
   */
  @Input() theme: 'dark' | 'light' = 'light';

  /**
   * Type
   */
  @Input() type: 'audio' | 'image' = 'image';

  /**
  * Size
  */
  @Input() size: 'compact' | 'normal' = 'normal';

  /**
   * Language code. Auto-detects the user's language if unspecified.
   */
  @Input() hl: string;

  /**
  * Tab index
  */
  @Input() tabIndex = 0;

  /**
   * Called when captcha is loaded. Event receives id of the captcha
   */
  @Output() load = new EventEmitter<number>();

  /**
   * Called when captcha receives successful response.
   * Captcha response token is passed to event.
   */
  @Output() success = new EventEmitter<string>();

  /**
  * Expired callback
  */
  @Input() expire = new EventEmitter<void>();

  /**
  * Error callback
  */
  @Input() error = new EventEmitter<void>();

  @ViewChild('captchaElem') captchaElem: ElementRef;
  @ViewChild('captchaScriptElem') captchaScriptElem: ElementRef;

  /**
   * Holds last response value
   */
  private currentResponse?: string;

  /**
   * Id of the captcha
   */
  private captchaId: number;

  constructor(
  ) {
  }

  ngOnInit(): void {
    // we need to patch the callback through global variable, otherwise callback is not accessible
    window[this.windowOnLoadCallback] = this.onloadCallback.bind(this);
  }

  ngAfterViewInit(): void {
    this.registerReCaptchaScript();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.siteKey && !changes.siteKey.isFirstChange() && (changes.sitekey.currentValue !== changes.siteKey.previousValue)) {
      // reset captcha if site key changed
      this.resetCaptcha();
    }
  }

  /**
   * Gets captcha response as per reCaptcha docs
  */
  getResponse(): string {
    return grecaptcha.getRespose(this.captchaId);
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
    grecaptcha.reset(this.captchaId);
  }

  /**
   * Called when google's recaptcha script is ready
  */
  private onloadCallback(): void {
    this.renderReCaptcha();
  }

  /**
   * Responsible for instantiating captcha element
  */
  private renderReCaptcha(): void {
    this.captchaId = grecaptcha.render(this.captchaElem.nativeElement, {
      'sitekey': this.siteKey,
      'callback': (response) => this.handleCallback(response),
      'expired-callback': () => this.handleExpireCallback(),
      'error-callback': () => this.handleErrorCallback(),
      'theme': this.theme,
      'type': this.type,
      'size': this.size,
      'tabindex': this.tabIndex
    });
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

  /**
   * Called when captcha receives response
   * @param callback Callback
   */
  private handleCallback(callback: any): void {
    this.currentResponse = callback;
    this.success.next(callback);
  }

  /**
   * Add script to page with reference to captcha API. This has to be done manually
   * as we want to avoid adding script to main index.html
  */
  private registerReCaptchaScript(): void {
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = `https://www.google.com/recaptcha/api.js?onload=${this.windowOnLoadCallback}&render=explicit${this.getLanguageParam()}`;
    script.async = true;
    script.defer = true;

    this.captchaScriptElem.nativeElement.appendChild(script);
  }

  private getLanguageParam(): string | undefined {
    if (!this.hl) {
      return undefined;
    }

    return `&hl=${this.hl}`;
  }
}

