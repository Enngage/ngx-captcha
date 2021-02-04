import { Injectable, NgZone } from '@angular/core';

import { EnterpriseScriptService } from './enterprise-script.service';

@Injectable()
export class RecaptchaEnterpriseService {
  constructor(protected enterpriseScriptService: EnterpriseScriptService, protected zone: NgZone) {}

  /**
   * Executes reCaptcha Enterprise with given action and passes token via callback. You need to verify
   * this callback in your backend to get meaningful results.
   *
   * For more information see https://cloud.google.com/recaptcha-enterprise/docs/create-assessment
   *
   * @param siteKey Site key found in http://console.cloud.google.com/security/recaptcha
   * @param action Action to log
   * @param callback Callback function to to handle token
   * @param config Optional configuration like useGlobalDomain to be provided
   * @param errorCallback Optional Callback function to handle errors
   */
  execute(
    siteKey: string,
    action: string,
    callback: (token: string) => void,
    config?: {
      useGlobalDomain: boolean;
    },
    errorCallback?: (error: any) => void
  ): void {
    this.executeAsPromise(siteKey, action, config)
      .then(callback)
      .catch((error) => errorCallback ? errorCallback(error) : console.error(error));
  }

  /**
   * Executes reCaptcha Enterprise with given action and returns token via Promise. You need to verify
   * this token in your backend to get meaningful results.
   *
   * For more information see https://cloud.google.com/recaptcha-enterprise/docs/create-assessment
   *
   * @param siteKey Site key found in http://console.cloud.google.com/security/recaptcha
   * @param action Action to log
   * @param config Optional configuration like useGlobalDomain to be provided
   */
  executeAsPromise(
    siteKey: string,
    action: string,
    config?: {
      useGlobalDomain: boolean;
    }
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const useGlobalDomain = config && config.useGlobalDomain ? true : false;

      const onRegister = grecaptcha => {
        this.zone.runOutsideAngular(() => {
          try {
            grecaptcha
              .execute(siteKey, { action })
              .then(token => this.zone.run(() => resolve(token)));
          } catch (error) {
            reject(error);
          }
        });
      };

      this.enterpriseScriptService.registerCaptchaScript(
        useGlobalDomain,
        siteKey,
        onRegister
      );
    });
  }
}
