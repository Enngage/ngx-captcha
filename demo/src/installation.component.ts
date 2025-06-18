import { AfterViewInit, Component, ChangeDetectionStrategy } from '@angular/core';

declare var hljs: any;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './installation.component.html',
    standalone: false
})
export class InstallationComponent implements AfterViewInit {

  public readonly installCode = `npm install ngx-captcha --save`;

  public readonly importModuleCode = `import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  imports: [
    ....,
    NgxCaptchaModule
  })

export class AppModule { }

`;

  public readonly templateCode = `<form [formGroup]="aFormGroup">
  <ngx-recaptcha2
    [siteKey]="siteKey"
    (reset)="handleReset()"
    (expire)="handleExpire()"
    (load)="handleLoad()"
    (success)="handleSuccess($event)"
    formControlName="recaptcha">
  </ngx-recaptcha2>
</form>

`;

  public readonly tsCode = `export class YourComponent implements OnInit {
    protected aFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.aFormGroup = this.formBuilder.group({
        recaptcha: ['', Validators.required]
      });
    }
  }
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
