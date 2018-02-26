import { Component, ViewChild } from '@angular/core';
import { InvisibleReCaptchaComponent } from '../ngx-captcha';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
})
export class DemoComponent {

  public siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

  public invisibleCaptchaSiteKey = '6LckpEgUAAAAACPcjmrg1Es-GnTltKx0MP61FBO8';

  @ViewChild('invisibleCaptcha') invisibleCaptcha: InvisibleReCaptchaComponent;

  handleSuccess(captchaResponse: string): void {
    console.log('Captcha response is:');
    console.log(captchaResponse);
  }

  handleLoad(): void {
    console.log('Captcha ready');
  }

  executeInvisibleCaptcha(): void {
    this.invisibleCaptcha.execute();
  }
}
