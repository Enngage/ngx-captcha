import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

import { InvisibleReCaptchaComponent } from '../ngx-captcha';

declare var PR: any;

@Component({
  selector: 'ngx-invisible-recaptcha-demo',
  templateUrl: './invisible-recaptcha-demo.component.html',
})
export class InvisibleReCaptchaDemoComponent implements AfterViewChecked {

  public readonly invisibleCaptchaSiteKey = '6LckpEgUAAAAACPcjmrg1Es-GnTltKx0MP61FBO8';

  public readonly exampleCode = `
<ngx-invisible-recaptcha #captchaElem
  [type]="type"
  [badge]="badge"
  (load)="handleLoad()"
  (success)="handleSuccess($event)">
</ngx-invisible-recaptcha>
`;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaResponse?: string;

  public badge: 'bottomright' | 'bottomleft' | 'inline' = 'inline';
  public type: 'image' | 'audio';

  @ViewChild('captchaElem') captchaElem: InvisibleReCaptchaComponent;
  @ViewChild('langInput') langInput: ElementRef;

  ngAfterViewChecked(): void {
    this.prettify();
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  execute(): void {
    this.captchaElem.execute();
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.cdr.detectChanges();
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.cdr.detectChanges();
  }

  changeBadge(badge: 'bottomright' | 'bottomleft' | 'inline' = 'bottomright'): void {
    this.badge = badge;
  }

  changeType(type: 'image' | 'audio'): void {
    this.type = type;
  }

  getResponse(): void {
    const response = this.captchaElem.getResponse();
    if (!response) {
      alert(`There is no response from grecaptcha script - try using 'getCurrentResponse' method or subscribe to 'success' event`);
    } else {
      alert(response);
    }
  }

  reload(): void {
    this.captchaElem.reloadCaptcha();
  }

  getCaptchaId(): void {
    alert(this.captchaElem.getCaptchaId());
  }

  reset(): void {
    this.captchaElem.resetCaptcha();
  }

  getCurrentResponse(): void {
    alert(this.captchaElem.getCurrentResponse());
  }

  private prettify(): void {
    if (window['PR']) {
      PR.prettyPrint();
    }
  }
}
