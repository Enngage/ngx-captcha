[![npm version](https://badge.fury.io/js/ngx-captcha.svg)](https://badge.fury.io/js/ngx-captcha)
[![Build Status](https://api.travis-ci.org/Enngage/ngx-captcha.svg?branch=master)](https://travis-ci.org/Enngage/ngx-captcha)
[![NPM](https://nodei.co/npm/ngx-captcha.png?mini=true)](https://nodei.co/npm/ngx-captcha/)

## Angular Captcha

Google reCaptcha implementation for Angular 6 and beyond. 

Live example: [https://enngage.github.io/ngx-captcha/](https://enngage.github.io/ngx-captcha/)

## Installation

```javascript
npm install ngx-captcha
```

Import `NgxCaptchaModule ` to your module (i.e. `AppModule`). You can configure global keys with `forRoot` (optionally) or you can use `siteKey` input parameter of captcha components.

```javascript
import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  imports: [
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: 'xxxx', // optional, can be overridden with 'siteKey' component property
      invisibleCaptchaSiteKey: 'yyy' // optional, can be overridden with 'siteKey' component property
    }),
  })

export class AppModule { }
```

## Usage

The configuration properties are a copy of the official ones that google provides. For explanation of what these properties do and how to use them, please refer to [https://developers.google.com/recaptcha/docs/display](https://developers.google.com/recaptcha/docs/display) and [https://developers.google.com/recaptcha/docs/invisible](https://developers.google.com/recaptcha/docs/invisible)

### reCaptcha2

```html
<ngx-recaptcha2
  [size]="size"
  [hl]="lang"
  [theme]="theme"
  [type]="type"
  (expire)="handleExpire()"
  (load)="handleLoad()"
  (success)="handleSuccess($event)">
</ngx-recaptcha2>
```

### Invisible captcha

```html
<ngx-invisible-recaptcha
  [type]="type"
  [badge]="badge"
  (load)="handleLoad()"
  (success)="handleSuccess($event)">
</ngx-invisible-recaptcha>
```
