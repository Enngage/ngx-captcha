export interface INgxCaptchaConfig {
    reCaptcha2SiteKey?: string | (() => string);
    invisibleCaptchaSiteKey?: string | (() => string);
}

export class NgxCaptchaConfig implements INgxCaptchaConfig {

    public reCaptcha2SiteKey?: string | (() => string);
    public invisibleCaptchaSiteKey?: string | (() => string);
}
