import { AfterViewChecked, Component, AfterViewInit } from '@angular/core';

declare var hljs: any;

@Component({
  templateUrl: './installation.component.html',
})
export class InstallationComponent implements AfterViewInit {

  public readonly installCode = `npm install ngx-captcha`;

  public readonly importModuleCode = `import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  imports: [
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: 'xxxx',
      invisibleCaptchaSiteKey: 'yyy'
    }),
  })

export class AppModule { }

`;

  public readonly exampleCode = `<ngx-invisible-recaptcha
  [type]="type"
  [badge]="badge"
  (load)="handleLoad()"
  (success)="handleSuccess($event)">
</ngx-invisible-recaptcha>

`;

  ngAfterViewInit(): void {
    this.highlight();
  }

  private highlight(): void {
    const highlightBlocks = document.getElementsByTagName('code');
    for (let i = 0; i < highlightBlocks.length; i++) {
      const block = highlightBlocks[i];
      hljs.highlightBlock(block);
    }
  }
}
