import { Component, ViewChild } from '@angular/core';

import { InvisibleReCaptchaComponent } from '../ngx-captcha';

@Component({
  selector: 'ngx-invisible-recaptcha-demo',
  templateUrl: './invisible-recaptcha-demo.component.html',
})
export class InvisibleReCaptchaDemoComponent {

  public invisibleCaptchaSiteKey = '6LckpEgUAAAAACPcjmrg1Es-GnTltKx0MP61FBO8';

  @ViewChild('invisibleCaptcha') invisibleCaptcha: InvisibleReCaptchaComponent;

  handleSuccess(captchaResponse: string): void {
    console.log('Success captcha response:');
    console.log(captchaResponse);
  }

  handleLoad(): void {
    console.log('Captcha ready');
  }

  executeInvisibleCaptcha(): void {
    this.invisibleCaptcha.execute();
  }
}
