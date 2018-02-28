export interface INgxCaptchaConfig {
    reCaptcha2SiteKey?: string;
    invisibleCaptchaSiteKey?: string;
}

export class NgxCaptchaConfig implements INgxCaptchaConfig {

    public reCaptcha2SiteKey?: string;
    public invisibleCaptchaSiteKey?: string;
}
