import { Injectable, NgZone } from "@angular/core";

import { ScriptService } from "./script.service";
import { RecaptchaConfiguration } from "../models/recaptcha-configuration";

@Injectable({
  providedIn: "root",
})
export class ReCaptchaV3Service {
  constructor(protected scriptService: ScriptService, protected zone: NgZone) {}

  /**
   * Executes reCaptcha v3/Enterprise with given action and passes token via callback. You need to verify
   * this callback in your backend to get meaningful results.
   *
   * For more information see https://developers.google.com/recaptcha/docs/v3
   * For enterprise see https://cloud.google.com/recaptcha-enterprise/docs
   *
   * @param siteKey Site key found in your google admin panel
   * @param action Action to log
   * @param callback Callback function to to handle token
   * @param config Optional configuration like useGlobalDomain to be provided
   * @param errorCallback Optional Callback function to handle errors
   */
  execute(
    siteKey: string,
    action: string,
    callback: (token: string) => void,
    config?: RecaptchaConfiguration,
    errorCallback?: (error: any) => void
  ): void {
    this.executeAsPromise(siteKey, action, config)
      .then(callback)
      .catch((error) =>
        errorCallback ? errorCallback(error) : console.error(error)
      );
  }

  /**
   * Executes reCaptcha v3/Enterprise with given action and returns token via Promise. You need to verify
   * this token in your backend to get meaningful results.
   *
   * For more information see https://developers.google.com/recaptcha/docs/v3
   * For enterprise see https://cloud.google.com/recaptcha-enterprise/docs
   *
   * @param siteKey Site key found in your google admin panel
   * @param action Action to log
   * @param config Optional configuration like useGlobalDomain to be provided
   */
  executeAsPromise(
    siteKey: string,
    action: string,
    config?: RecaptchaConfiguration
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const configuration = config || {};

      const onRegister = (grecaptcha: any) => {
        this.zone.runOutsideAngular(() => {
          try {
            grecaptcha
              .execute(siteKey, { action })
              .then((token: any) => this.zone.run(() => resolve(token)));
          } catch (error) {
            reject(error);
          }
        });
      };

      this.scriptService.registerCaptchaScript(
        configuration,
        siteKey,
        onRegister
      );
    });
  }
}
