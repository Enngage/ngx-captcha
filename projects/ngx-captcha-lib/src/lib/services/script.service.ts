import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, NgZone, PLATFORM_ID } from "@angular/core";
import { RecaptchaConfiguration } from "../models/recaptcha-configuration";

@Injectable({
  providedIn: "root",
})
export class ScriptService {
  private readonly scriptElemId: string = "ngx-catpcha-script";

  /**
   * Name of the global google recaptcha script
   */
  protected readonly windowGrecaptcha = "grecaptcha";

  /**
   * Name of enterpise property in the global google recaptcha script
   */
  protected readonly windowGrecaptchaEnterprise = "enterprise";

  /**
   * Name of the global callback
   */
  protected readonly windowOnLoadCallbackProperty =
    "ngx_captcha_onload_callback";

  /**
   * Name of the global callback for enterprise
   */
  protected readonly windowOnLoadEnterpriseCallbackProperty =
    "ngx_captcha_onload_enterprise_callback";

  protected readonly globalDomain: string = "recaptcha.net";

  protected readonly defaultDomain: string = "google.com";

  protected readonly enterpriseApi: string = "enterprise.js";

  protected readonly defaultApi: string = "api.js";

  constructor(protected zone: NgZone, @Inject(PLATFORM_ID) private platformId:Object) {}

  registerCaptchaScript(
    config: RecaptchaConfiguration,
    render: string,
    onLoad: (grecaptcha: any) => void,
    language?: string
  ): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.grecaptchaScriptLoaded(config.useEnterprise)) {
        // recaptcha script is already loaded
        // just call the callback
        if (config.useEnterprise) {
          this.zone.run(() => {
            onLoad(
              window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]
            );
          });
        } else {
          this.zone.run(() => {
            onLoad(window[this.windowGrecaptcha]);
          });
        }
        return;
      }
  
      // we need to patch the callback through global variable, otherwise callback is not accessible
      // note: https://github.com/Enngage/ngx-captcha/issues/2
      if (config.useEnterprise) {
        window[this.getCallbackName(true)] = <any>(
          (() =>
            this.zone.run(
              onLoad.bind(
                this,
                window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]
              )
            ))
        );
      } else {
        window[this.getCallbackName(false)] = <any>(
          (() => this.zone.run(onLoad.bind(this, window[this.windowGrecaptcha])))
        );
      }
  
      // prepare script elem
      const scriptElem = document.createElement("script");
      scriptElem.id = this.scriptElemId;
      scriptElem.innerHTML = "";
      scriptElem.src = this.getCaptchaScriptUrl(config, render, language);
      scriptElem.async = true;
      scriptElem.defer = true;
  
      // add script to header
      document.getElementsByTagName("head")[0].appendChild(scriptElem);
    }
  }

  cleanup(): void {
    const elem = document.getElementById(this.scriptElemId);

    if (elem) {
      elem.remove();
    }
    window[this.getCallbackName()] = undefined;
    window[this.windowGrecaptcha] = undefined;
  }

  /**
   * Indicates if google recaptcha script is available and ready to be used
   */
  private grecaptchaScriptLoaded(useEnterprise?: boolean): boolean {
    if (
      !window[this.getCallbackName(useEnterprise)] ||
      !window[this.windowGrecaptcha]
    ) {
      return false;
    } else if (
      useEnterprise &&
      window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]
    ) {
      return true;
      // if only enterprise script is loaded we need to check some v3's method
    } else if (window[this.windowGrecaptcha].execute) {
      return true;
    }
    return false;
  }

  /**
   * Gets global callback name
   * @param useEnterprise Optional flag for enterprise script
   * @private
   */
  private getCallbackName(useEnterprise?: boolean): string {
    return useEnterprise
      ? this.windowOnLoadEnterpriseCallbackProperty
      : this.windowOnLoadCallbackProperty;
  }

  /**
   * Gets language param used in script url
   */
  private getLanguageParam(hl?: string): string {
    if (!hl) {
      return "";
    }

    return `&hl=${hl}`;
  }

  /**
   * Url to google api script
   */
  private getCaptchaScriptUrl(
    config: RecaptchaConfiguration,
    render: string,
    language?: string
  ): string {
    const domain = config.useGlobalDomain
      ? this.globalDomain
      : this.defaultDomain;
    const api = config.useEnterprise ? this.enterpriseApi : this.defaultApi;
    const callback = this.getCallbackName(config.useEnterprise);

    return `https://www.${domain}/recaptcha/${api}?onload=${callback}&render=${render}${this.getLanguageParam(
      language
    )}`;
  }
}
