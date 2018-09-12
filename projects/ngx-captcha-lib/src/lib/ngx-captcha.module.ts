import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InvisibleReCaptchaComponent, ReCaptcha2Component } from './components';
import { ReCaptchaV3Service, ScriptService } from './services';

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
}


