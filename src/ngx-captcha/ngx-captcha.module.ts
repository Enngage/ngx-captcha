import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReCaptcha2Component } from './components/recaptcha-2.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ReCaptcha2Component
  ],
  exports: [
    ReCaptcha2Component
  ]
})
export class NgxCaptchaModule { }
