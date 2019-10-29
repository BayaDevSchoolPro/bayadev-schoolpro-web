
import { BayadevejemplotemplateComponent } from './bayadevejemplotemplate.component';
import { Component } from '@angular/core';


@Component({
    selector: 'bayadevejemplotemplate-header',
    templateUrl: './bayadevejemplotemplate.header.component.html'
})
export class BayadevejemplotemplateHeaderComponent {

    constructor(public app: BayadevejemplotemplateComponent) { }

    themeChange(e) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const href = themeLink.href;
        const themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
        const themeTokens = themeFile.split('-');
        const themeName = themeTokens[1];
        const themeMode = themeTokens[2];
        const newThemeMode = (themeMode === 'dark') ? 'light' : 'dark';

        this.app.changeTheme(themeName + '-' + newThemeMode);
    }
}
