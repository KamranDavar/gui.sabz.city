/* For license and copyright information please see LEGAL file in repository */

import { LitElement, css, html } from '../lit-element/lit-element.js'
import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

/* 
- Redirect to login first if not find any user!
- Redirect url is app url user came! url must check?
- 
*/

export class PageOauth extends LitElement {
    constructor() {
        super()
        this.appName = 'Evernote'
        this.appLink = 'http://evernote.com'
        this.appAccess = [
            { title: 'View your email address', grant: true },
            { title: 'View your basic info', grant: true }
        ]
    }
    static get properties() {
        return {
            appName: String,
            appLink: String,
            appAccess: Array,
        }
    }
    static get styles() {
        return [
            Application.DesignLanguageStyles,
            css`
                .card {
                    display: flex;
                    flex-direction: column;
                    padding: 16px 32px;
                    max-width: 600px;
                    margin: 16px auto;
                }

                .typography--headline6 {
                    text-align: center;
                    margin: 24px 0;
                }

                .typography--body2 {
                    text-align: center;
                    margin: 8px 0;
                }

                .card a {
                    text-decoration: none;
                    color: var(--color--primary);
                    text-align: center;
                    display: inline-block;
                    margin: 8px 0
                }

                #access-list {
                    display: flex;
                    flex-direction: column;
                    margin: 24px 0;
                }

                #access-list .checkbox {
                    margin: 8px 0;
                }

                #button-container {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 8px;
                }

                #button-container button {
                    color: var(--color--primary--primary-on);
                    background-color: var(--color--primary);
                }

                @media screen and (max-width: 480px) {
                    .card {
                        margin: 0 auto;
                    }
                }
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
                <div class="card">
                    <h1 class="typography--headline6"> ${localeText[1]} </h1>
                    <p class="typography--body2">${this.appName} want below access. you can remove defaults!</p>
            
                    <a href="${this.appLink}" class="typography--subtitle2"> ${this.appName} Website</a>
            
                    <div id="access-list">
                        ${this.appAccess.map(access => html`
                        <input type=checkbox ?checked=${access.grant} id=${access.title} />
                        <label for=${access.title}> ${access.title} </label>
                        `)}
                    </div>
            
                    <div id="button-container">
                        <button class=raised>Grant Access</button>
                    </div>
                </div>
            
                <div class="card typography--subtitle2">
                    <a href="/security">Anytime you can change this access here</a>
                </div>
            </main>
        `
    }
}
customElements.define("page-oauth", PageOauth)

let localeText = {
    "en": [
        "",
        "Oauth",
    ],
    "fa": [
        "",
        "دسترسی دادن"
    ],
}
localeText = localeText[Application.UserPreferences.ContentPreferences.Language.iso639_1]