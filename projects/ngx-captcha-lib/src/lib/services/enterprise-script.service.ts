import { Injectable, NgZone } from '@angular/core';

declare var document: any;

@Injectable()
export class EnterpriseScriptService {

    /**
     * Name of the global google recaptcha script
     */
    protected readonly windowGrecaptcha = 'grecaptcha';

    /**
     * Name of enterpise property in the global google recaptcha script
     */
    protected readonly windowGrecaptchaEnterprise = 'enterprise';

    /**
    * Name of the global callback
    */
    protected readonly windowOnLoadCallbackProperty = 'ngx_enterprise_captcha_onload_callback';

    protected readonly globalDomain: string = 'recaptcha.net';

    protected readonly defaultDomain: string = 'google.com';

    constructor(
        protected zone: NgZone,
    ) {
    }

    registerCaptchaScript(useGlobalDomain: boolean, render: string, onLoad: (grecaptcha: any) => void, language?: string): void {
        if (this.grecaptchaScriptLoaded()) {
            // recaptcha script is already loaded
            // just call the callback
            this.zone.run(() => {
                onLoad(window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]);
            });
            return;
        }

        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = <any>(() => this.zone.run(
            onLoad.bind(this, window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise])
        ));

        // prepare script elem
        const scriptElem = document.createElement('script');
        scriptElem.innerHTML = '';
        scriptElem.src = this.getCaptchaScriptUrl(useGlobalDomain, render, language);
        scriptElem.async = true;
        scriptElem.defer = true;

        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }

    /**
     * Indicates if google recaptcha script is available and ready to be used
     */
    private grecaptchaScriptLoaded(): boolean {
        // tslint:disable-next-line:max-line-length
        if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha] && window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]) {
            return true;
        }
        return false;
    }

    /**
     * Gets language param used in script url
     */
    private getLanguageParam(hl?: string): string {
        if (!hl) {
            return '';
        }

        return `&hl=${hl}`;
    }

    /**
    * Url to google api script
    */
    private getCaptchaScriptUrl(useGlobalDomain: boolean, render: string, language?: string): string {
        const domain = useGlobalDomain ? this.globalDomain : this.defaultDomain;

        // tslint:disable-next-line:max-line-length
        return `https://www.${domain}/recaptcha/enterprise.js?onload=${this.windowOnLoadCallbackProperty}&render=${render}${this.getLanguageParam(language)}`;
    }

}
