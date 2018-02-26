import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgxCaptchaModule } from '../ngx-captcha';
import { DemoComponent } from './demo.component';
import { DemoRoutes } from './demo.routes';
import { InvisibleReCaptchaDemoComponent } from './invisible-recaptcha-demo.component';
import { ReCaptcha2DemoComponent } from './re-captcha-2-demo.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    NgxCaptchaModule,
    DemoRoutes
  ],
  declarations: [
    DemoComponent,
    InvisibleReCaptchaDemoComponent,
    ReCaptcha2DemoComponent,
  ],

  bootstrap: [DemoComponent]
})
export class DemoModule { }
