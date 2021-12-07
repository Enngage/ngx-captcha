[![npm version](https://badge.fury.io/js/ngx-captcha.svg)](https://badge.fury.io/js/ngx-captcha)
[![Build Status](https://api.travis-ci.org/Enngage/ngx-captcha.svg?branch=master)](https://travis-ci.org/Enngage/ngx-captcha)
[![NPM](https://nodei.co/npm/ngx-captcha.png?mini=true)](https://nodei.co/npm/ngx-captcha/)

## Angular Captcha

Google reCaptcha implementation for Angular 13.

Features: 

1. reCaptcha v2
2. reCaptcha v3 (beta)
3. invisible reCaptcha

Live examples: [https://enngage.github.io/ngx-captcha/](https://enngage.github.io/ngx-captcha/)

## Installation

```javascript
npm install ngx-captcha
```

Import `NgxCaptchaModule ` to your module (i.e. `AppModule`)

### Use with Angular forms

Depending on whether you want to use [reactive forms](https://angular.io/guide/reactive-forms) or [template-driven forms](https://angular.io/guide/forms) you need to include the appropriate modules, too.
Add `ReactiveFormsModule` to your imports in case you want to use reactive forms. If you prefer the the template-driven approach simple add the `FormsModule` to your module. 

Both can be imported from `@angular/forms`. In the demo project you can check out the *normal* demo to see how to use reactive forms or the *invisible* demo to see what the template-driven approach looks like. With the template-driven approach you don't necessarily need to use a from element to wrap the component, you can instead use the `[ngModelOptions]="{ standalone: true }"`.
However, using it with the standalone option is not recommended but can be used if needed. 

```javascript
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgxCaptchaModule
  })

export class AppModule { }
```

## Usage
The configuration properties are a copy of the official ones that google provides. For explanation of what these properties do and how to use them, please refer to [https://developers.google.com/recaptcha/docs/display](https://developers.google.com/recaptcha/docs/display) and [https://developers.google.com/recaptcha/docs/invisible](https://developers.google.com/recaptcha/docs/invisible).

### reCaptcha v2

your.component.ts
```typescript
export class YourComponent implements OnInit {
  protected aFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}
```

your.template.html
```html
<form [formGroup]="aFormGroup">
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
```

### reCaptcha v3

 This is the implementation of <em>beta</em> version of google reCaptcha v3 as per following documentation["https://developers.google.com/recaptcha/docs/v3"](https://developers.google.com/recaptcha/docs/v3).

 First you need to inject the <em></em> class in your component / service and then use <em>Execute</em> method with your action. Once you have the token, you need to verify it on your backend to get meaningful results. See official google documentation for more details.

 ```typescript
 import { ReCaptchaV3Service } from 'ngx-captcha';

  constructor(
    private reCaptchaV3Service: ReCaptchaV3Service
  ) { }

  ....

  this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
    console.log('This is your token: ', token);
  }, {
      useGlobalDomain: false
  });
 ```

### Invisible reCaptcha

```html
<form [formGroup]="aFormGroup">
  <ngx-invisible-recaptcha #captchaElem
    [siteKey]="siteKey"
    (reset)="handleReset()"
    (ready)="handleReady()"
    (load)="handleLoad()"
    (success)="handleSuccess($event)"
    [useGlobalDomain]="false"
    [type]="type"
    [badge]="badge"
    [ngModel]="recaptcha"
    [ngModelOptions]="{ standalone: true }">
  </ngx-invisible-recaptcha>
</form>
```

### Unit testing

Unit testing in Angular is possible, but a bit clunky because this component tries to dynamically include google's script if its not already loaded. You are not required to include in globally or manually which has a benefit of not loading until you actually use this component. This has a caveat though, since the `load` callback is executed outside of Angular's zone, performing unit tests might fail due to racing condition where Angular might fail the test before the script has a chance to load and initialize captcha. 

A simple fix for this is wait certain amount of time so that everything has a chance to initialize. See example below:

```typescript
beforeEach(() => {
        fixture = TestBed.createComponent(YourComponent);
        component = fixture.componentInstance;
        setTimeout(function () {
            fixture.detectChanges();
        }, 2000);
});
```

Other possible scenario might be including google's script globally. If someone has a better solution, please do let me know or submit a PR for a change in readme.

### Publishing lib

Under `projects\ngx-captcha-lib` run 

```
npm run publish-lib
```

