/* For license and copyright information please see LEGAL file in repository */

import { LitElement, css, html } from '../lit-element/lit-element.js'
import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

export class PageNews extends LitElement {
    // constructor() {
    //     super() 
    // }
    // static get properties() {
    //     return {}
    // }
    static get styles() {
        return [
            Application.DesignLanguageStyles,
            css`
            `
        ]
    }
    render() {
        return html`
            <header class="app-bar">
                <span class="left">
                    <widget-hamburger-menu></widget-hamburger-menu>
                    <a href="/"><img alt="SabzCity logo" src="/images/app-icon-48x48.png" /></a>
                </span>
            
                <span class="center"></span>
            
                <span class="right">
                    <widget-user-menu></widget-user-menu>
                    <widget-service-menu></widget-service-menu>
                </span>
            </header>
            
            <main>
            </main>
            
            <section class="UnderConstruction">
                <div class="UnderConstructionIMG"></div>
            
                <p style="color:#92989b; font-size:15pt;">Coming soon ...</p>
            
                <p class="Powered">
                    POWERED BY <br />
                    <a href="https://github.com/SabzCity" style="color:#616161; text-decoration:none;">SABZCITY OPENSOURCE PLATFORM</a>
                </p>
            </section>
		`
    }
}
customElements.define('page-news', PageNews)

let localeText = {
    "en": [
        "",
    ],
    "fa": [
        "",
    ],
}
localeText = localeText[Application.UserPreferences.ContentPreferences.Language.iso639_1]