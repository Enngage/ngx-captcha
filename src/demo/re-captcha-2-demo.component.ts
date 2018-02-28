import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

import { ReCaptcha2Component } from '../ngx-captcha';

declare var PR: any;

@Component({
  selector: 'ngx-recaptcha-2-demo',
  templateUrl: './re-captcha-2-demo.component.html',
})
export class ReCaptcha2DemoComponent implements AfterViewChecked {

  public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';

  public readonly installCode = `
  npm install ngx-captcha`;

  public readonly importModuleCode = `
import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  imports: [
    NgxCaptchaModule
  })

  export class AppModule { }`;

  public readonly exampleCode = `
<ngx-recaptcha2 #captchaElem
  [siteKey]="siteKey"
  [size]="size"
  [hl]="lang"
  [theme]="theme"
  [type]="type"
  (expire)="handleExpire()"
  (load)="handleLoad()"
  (success)="handleSuccess($event)">
</ngx-recaptcha2>`;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('langInput') langInput: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {
    this.prettify();
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.cdr.detectChanges();
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.cdr.detectChanges();
  }

  handleExpire(): void {
    this.captchaIsExpired = true;
    this.cdr.detectChanges();
  }

  changeTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
  }

  changeSize(size: 'compact' | 'normal'): void {
    this.size = size;
  }

  changeType(type: 'image' | 'audio'): void {
    this.type = type;
  }

  setLanguage(): void {
    this.lang = this.langInput.nativeElement.value;
  }

  getCurrentResponse(): void {
    alert(this.captchaElem.getCurrentResponse());
  }

  getResponse(): void {
    const response = this.captchaElem.getResponse();
    if (!response) {
      alert('There is no response - have you submitted captcha?');
    } else {
      alert(response);
    }
  }

  reload(): void {
    this.captchaElem.reloadCaptcha();
  }

  getCaptchaId(): void {
    alert(this.captchaElem.getCaptchaId());
  }

  reset(): void {
    this.captchaElem.resetCaptcha();
  }

  private prettify(): void {
    if (window['PR']) {
      PR.prettyPrint();
    }
  }
}
