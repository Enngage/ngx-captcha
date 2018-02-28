import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReCaptcha2Component } from './recaptcha/recaptcha-2.component';
import { InvisibleReCaptchaComponent } from './recaptcha/invisible-recaptcha.component';
import { INgxCaptchaConfig, NgxCaptchaConfig } from './recaptcha/recaptcha.config';

@NgModule({
  imports: [
    BrowserModule
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

  static forRoot(config: INgxCaptchaConfig): ModuleWithProviders {
    return {
      ngModule: NgxCaptchaModule,
      providers: [
        { provide: NgxCaptchaConfig, useValue: config }
      ]
    };
  }
}


