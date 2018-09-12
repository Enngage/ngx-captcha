import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { InvisibleReCaptchaComponent } from './invisible-recaptcha.component';
import { ReCaptcha2Component } from './recaptcha-2.component';
import { NgxCaptchaConfig } from './recaptcha.config';
import { ScriptService } from './services/script.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReCaptcha2Component,
    InvisibleReCaptchaComponent
  ],
  providers: [
    ScriptService
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


