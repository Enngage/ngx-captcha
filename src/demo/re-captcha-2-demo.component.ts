import { Component, ViewChild } from '@angular/core';
import { ReCaptcha2Component } from '../ngx-captcha';

@Component({
  selector: 'ngx-recaptcha-2-demo',
  templateUrl: './re-captcha-2-demo.component.html',
})
export class ReCaptcha2DemoComponent {

  public siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

  public theme: 'light' | 'dark' = 'light';

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;

  handleSuccess(captchaResponse: string): void {
    console.log('Success captcha response:');
    console.log(captchaResponse);
  }

  handleLoad(): void {
    console.log('Captcha ready');
  }

  changeTheme(theme: 'light' | 'dark'): void {
    console.log(theme);
    this.theme = theme;
    this.reloadCaptcha();
  }

  private reloadCaptcha(): void {
    this.captchaElem.reloadCaptcha();
    console.log(this.captchaElem);
  }
}
