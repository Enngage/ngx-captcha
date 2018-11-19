import { Injectable, NgZone } from '@angular/core';

import { ScriptService } from './script.service';

@Injectable()
export class ReCaptchaV3Service {

    constructor(
        protected scriptService: ScriptService,
        protected zone: NgZone
    ) {
    }

    /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param siteKey Site key found in your google admin panel
     * @param action Action to log
     */
    execute(siteKey: string, action: string, callback: (token: string) => void, config?: {
        useGlobalDomain: boolean
    }): void {

        const useGlobalDomain = config && config.useGlobalDomain ? true : false;

        this.scriptService.registerCaptchaScript(useGlobalDomain, siteKey, (grecaptcha) => {
            this.zone.runOutsideAngular(() => {
                grecaptcha.execute(siteKey, {
                    action: action
                }).then((token) => {
                    this.zone.run(() => callback(token));
                });
            });
        });
    }
}
