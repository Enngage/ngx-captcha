import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InvisibleReCaptchaComponent } from './recaptcha/invisible-recaptcha.component';
import { ReCaptcha2Component } from './recaptcha/recaptcha-2.component';
import { NgxCaptchaConfig } from './recaptcha/recaptcha.config';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    ReCaptcha2Component,
    InvisibleReCaptchaComponent
  ],
  exports: [
    ReCaptcha2Component,
    InvisibleReCaptchaComponent
  ]
})
export class NgxCaptchaModule {

  static forRoot(config?: NgxCaptchaConfig): ModuleWithProviders {
    return {
      ngModule: NgxCaptchaModule,
      providers: [
        {
          provide: NgxCaptchaConfig,
          useValue: config,
        }
      ]
    };
  }
}


