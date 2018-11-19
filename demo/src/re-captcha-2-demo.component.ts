import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, OnInit,
  ViewChild
} from '@angular/core';

import { ReCaptcha2Component } from '../../projects/ngx-captcha-lib/src/public_api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var hljs: any;

@Component({
  selector: 'ngx-recaptcha-2-demo',
  templateUrl: './re-captcha-2-demo.component.html'
})
export class ReCaptcha2DemoComponent implements OnInit, AfterViewInit {

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

  public readonly exampleCode = `<form [formGroup]="aFormGroup">
  <ngx-recaptcha2 #captchaElem
    [siteKey]="siteKey"
    (reset)="handleReset()"
    (expire)="handleExpire()"
    (load)="handleLoad()"
    (success)="handleSuccess($event)"
    [useGlobalDomain]="false"
    [size]="size"
    [hl]="lang"
    [theme]="theme"
    [type]="type"
    formControlName="recaptcha">
  </ngx-recaptcha2>
</form>
`;

  public readonly exampleTsCode = `class YourComponent implements OnInit {
    public aFormGroup: FormGroup;

    constructor(
      private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.aFormGroup = this.formBuilder.group({
        recaptcha: ['', Validators.required]
      });
    }
  }
  `;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
  public useGlobalDomain: boolean = false;

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('langInput') langInput: ElementRef;
  public aFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.highlight();
  }

  handleReset(): void {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.captchaIsExpired = false;
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
  }

  handleExpire(): void {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
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

  setUseGlobalDomain(use: boolean): void {
    this.useGlobalDomain = use;
  }

  getCurrentResponse(): void {
    const currentResponse = this.captchaElem.getCurrentResponse();
    if (!currentResponse) {
      alert('There is no current response - have you submitted captcha?');
    } else {
      alert(currentResponse);
    }
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

  private highlight(): void {
    const highlightBlocks = document.getElementsByTagName('code');
    for (let i = 0; i < highlightBlocks.length; i++) {
      const block = highlightBlocks[i];
      hljs.highlightBlock(block);
    }
  }
}
