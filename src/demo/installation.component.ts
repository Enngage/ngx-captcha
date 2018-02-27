import { AfterViewChecked, Component } from '@angular/core';

declare var PR: any;

@Component({
  templateUrl: './installation.component.html',
})
export class InstallationComponent implements AfterViewChecked {

  public readonly installCode = `npm install ngx-captcha`;

  public readonly importModuleCode = `
import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  imports: [
    NgxCaptchaModule
  })

export class AppModule { }

`;

  public readonly exampleCode = `
<ngx-invisible-recaptcha
  [siteKey]="invisibleCaptchaSiteKey"
  [type]="type"
  [badge]="badge"
  (load)="handleLoad($event)"
  (success)="handleSuccess($event)">
</ngx-invisible-recaptcha>

`;

  ngAfterViewChecked(): void {
    this.prettify();
  }

  private prettify(): void {
    if (window['PR']) {
      PR.prettyPrint();
    }
  }
}
