import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { InvisibleReCaptchaComponent, ReCaptcha2Component } from './components';
import { NgxCaptchaConfig } from './models';
import { ScriptService, ReCaptchaV3Service } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReCaptcha2Component,
    InvisibleReCaptchaComponent
  ],
  providers: [
    ScriptService,
    ReCaptchaV3Service
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


