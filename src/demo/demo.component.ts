import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
})
export class DemoComponent {

  public siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

  handleSuccess(captchaResponse: string): void {
    console.log('Captcha response is:');
    console.log(captchaResponse);
  }

  handleLoad(): void {
    console.log('Captcha ready');
  }
}
