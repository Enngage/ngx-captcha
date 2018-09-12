import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgxCaptchaModule } from '../../projects/ngx-captcha-lib/src/lib';
import { DemoComponent } from './demo.component';
import { DemoRoutes } from './demo.routes';
import { InstallationComponent } from './installation.component';
import { InvisibleReCaptchaDemoComponent } from './invisible-recaptcha-demo.component';
import { ReCaptcha2DemoComponent } from './re-captcha-2-demo.component';
import { ReCaptcha3DemoComponent } from './re-captcha-3-demo.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    DemoRoutes
  ],
  declarations: [
    DemoComponent,
    InvisibleReCaptchaDemoComponent,
    ReCaptcha2DemoComponent,
    InstallationComponent,
    ReCaptcha3DemoComponent
  ],

  bootstrap: [DemoComponent]
})
export class DemoModule { }
