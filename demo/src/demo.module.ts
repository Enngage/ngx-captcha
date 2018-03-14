import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgxCaptchaModule } from '../../src';
import { DemoComponent } from './demo.component';
import { DemoRoutes } from './demo.routes';
import { InstallationComponent } from './installation.component';
import { InvisibleReCaptchaDemoComponent } from './invisible-recaptcha-demo.component';
import { ReCaptcha2DemoComponent } from './re-captcha-2-demo.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1',
      invisibleCaptchaSiteKey: '6LckpEgUAAAAACPcjmrg1Es-GnTltKx0MP61FBO8'
    }),
    DemoRoutes
  ],
  declarations: [
    DemoComponent,
    InvisibleReCaptchaDemoComponent,
    ReCaptcha2DemoComponent,
    InstallationComponent
  ],

  bootstrap: [DemoComponent]
})
export class DemoModule { }
