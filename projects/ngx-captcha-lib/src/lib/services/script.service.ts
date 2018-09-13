import { Injectable, NgZone } from '@angular/core';

declare var document: any;

@Injectable()
export class ScriptService {

    /**
     * Name of the global google recaptcha script
     */
    protected readonly windowGrecaptcha = 'grecaptcha';

    /**
    * Name of the global callback
    */
    protected readonly windowOnLoadCallbackProperty = 'ngx_captcha_onload_callback';

    constructor(
        protected zone: NgZone,
    ) {
    }

    registerCaptchaScript(render: string, onLoad: (grecaptcha: any) => void, language?: string): void {
        if (this.grecaptchaScriptLoaded()) {
            // recaptcha script is already loaded
            // just call the callback
            this.zone.run(() => {
                onLoad(window[this.windowGrecaptcha]);
            });
            return;
        }

        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = <any>(() => this.zone.run(
            onLoad.bind(this, window[this.windowGrecaptcha])
        ));

        // prepare script elem
        const scriptElem = document.createElement('script');
        scriptElem.innerHTML = '';
        scriptElem.src = this.getCaptchaScriptUrl(render, language);
        scriptElem.async = true;
        scriptElem.defer = true;

        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }

    cleanup(): void {
        window[this.windowOnLoadCallbackProperty] = undefined;
        window[this.windowGrecaptcha] = undefined;
    }

    /**
     * Indicates if google recaptcha script is available and ready to be used
     */
    private grecaptchaScriptLoaded(): boolean {
        if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha]) {
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
    private getCaptchaScriptUrl(render: string, language?: string): string {
        // tslint:disable-next-line:max-line-length
        return `https://www.google.com/recaptcha/api.js?onload=${this.windowOnLoadCallbackProperty}&render=${render}${this.getLanguageParam(language)}`;
    }

}
