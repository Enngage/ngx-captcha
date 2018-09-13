import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InvisibleReCaptchaComponent } from './components/invisible-recaptcha.component';
import { ReCaptcha2Component } from './components/recaptcha-2.component';
import { ReCaptchaV3Service } from './services/recaptcha_v3.service';
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


