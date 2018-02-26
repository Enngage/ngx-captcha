import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { InvisibleReCaptchaDemoComponent } from './invisible-recaptcha-demo.component';
import { ReCaptcha2DemoComponent } from './re-captcha-2-demo.component';

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot([
            {
                path: 'invisible', component: InvisibleReCaptchaDemoComponent
            },
            {
                path: 'recaptcha2', component: ReCaptcha2DemoComponent
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DemoRoutes { }
