/* For license and copyright information please see LEGAL file in repository */

import { LitElement, css, html } from '../lit-element/lit-element.js'
import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

export class PageSearch extends LitElement {
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
                <div class="left">
                    <widget-hamburger-menu></widget-hamburger-menu>
                    <a href="/"><img alt="SabzCity logo" src="/images/app-icon-48x48.png" /></a>
                </div>
            
                <div class="center"></div>
            
                <div class="right">
                    <widget-user-menu></widget-user-menu>
                    <widget-service-menu></widget-service-menu>
                </div>
            </header>
            
            <main>
                Search home page
            </main>
		`
    }
}
customElements.define('page-search', PageSearch)

let localeText = {
    "en": [
        "",
    ],
    "fa": [
        "",
    ],
}
localeText = localeText[Application.UserPreferences.ContentPreferences.Language.iso639_1]
