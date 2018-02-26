import { Component } from '@angular/core';

@Component({
  selector: 'ngx-recaptcha-2-demo',
  templateUrl: './re-captcha-2-demo.component.html',
})
export class ReCaptcha2DemoComponent {

  public siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

  handleSuccess(captchaResponse: string): void {
    console.log('Success captcha response:');
    console.log(captchaResponse);
  }

  handleLoad(): void {
    console.log('Captcha ready');
  }
}
