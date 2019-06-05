import { AfterViewInit, Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ReCaptchaV3Service, ScriptService } from '../../projects/ngx-captcha-lib/src/public_api';

declare var hljs: any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngx-recaptcha-3-demo',
  templateUrl: './re-captcha-3-demo.component.html',
})
export class ReCaptcha3DemoComponent implements OnInit, AfterViewInit {

  public siteKey?: string = '6Ldb528UAAAAAMD7bdsxQz2gQSl-Jb-kGTyAHThi';
  public action?: string = 'homepage';
  public token?: string;
  public error?: string;

  public readonly constructorCode = `
  import { ReCaptchaV3Service } from 'ngx-captcha';

  constructor(
    private reCaptchaV3Service: ReCaptchaV3Service
  ) { }
  `;

  public readonly methodCode = `
  this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
    console.log('This is your token: ', token);
  }, {
    useGlobalDomain: false // optional
  });
  `;

  constructor(
    private reCaptchaV3Service: ReCaptchaV3Service,
    private scriptService: ScriptService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.highlight();
  }

  execute(): void {
    this.token = undefined;

    if (!this.siteKey) {
      this.error = 'Site key is not set';
      return;
    }

    if (!this.action) {
      this.error = 'Action is not set';
      return;
    }

    // clean script to make sure siteKey is set correctly (because previous script could be incorrect)
    this.scriptService.cleanup();

    this.error = undefined;

    this.reCaptchaV3Service.execute(this.siteKey, 'reCaptcha3DemoPage', (token) => {
      this.token = token;
      console.log('Your token is: ', token);
      this.cdr.detectChanges();
    }, {
      useGlobalDomain: false
    });
  }

  private highlight(): void {
    const highlightBlocks = document.getElementsByTagName('code');
    for (let i = 0; i < highlightBlocks.length; i++) {
      const block = highlightBlocks[i];
      hljs.highlightBlock(block);
    }
  }
}
