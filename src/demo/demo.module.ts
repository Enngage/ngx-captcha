import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent } from './demo.component';
import { NgxCaptchaModule } from '../ngx-captcha';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }
