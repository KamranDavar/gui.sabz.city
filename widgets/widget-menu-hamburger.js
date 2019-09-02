/* For license and copyright information please see LEGAL file in repository */

import { html, css, LitElement, unsafeCSS } from '../lit-element/lit-element.js'

Application.Widgets["hamburger-menu"] = {
    Text: {
        "en": [
            "",
            "Localize",
            "Terms & Services",
            "Related services",
            "Service menu",
            "About Service"
        ],
        "fa": [
            "",
            "محلی سازی",
            "قوانین و شرایط",
            "سرویس های مرتبط",
            "منوی سرویس",
            "درباره سرویس"
        ],
    }
}

export class WidgetHamburgerMenu extends LitElement {
    // constructor() {
    //     super()
    // }
    static get properties() {
        return {
            dialogOpen: Boolean,
        }
    }
    static get styles() {
        return css`
            @import '${unsafeCSS(Application.DesignLanguageStyles.href)}';
            
            .typography--body2 {
                text-transform: capitalize;
            }

            a svg {
                vertical-align: middle;
                width:24px;
                height:24px
            }

            nav > h4 {
                text-align: center;
                margin: 0;
            }
        `
    }
    render() {
        return html`
            <button type="button" class="icon" @click=${this.invertDialogOpen} title=${Application.Widgets["hamburger-menu"].LocaleText[4]} aria-haspopup="true"
                aria-controls="hamMenu" ?aria-expanded=${this.dialogOpen} accesskey="H">
                <svg viewBox="0 0 24 24">
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
            </button>
            
            <div class="disabledBackground" @click=${this.invertDialogOpen} ?hidden=${!this.dialogOpen}></div>
            <dialog type=modal class="drawer" id="hamMenu" ?open=${this.dialogOpen}>
                <!-- Show active service details -->
                <header>
                    <h3>${Application.ActivePage.LocaleInfo.Name}</h3>
                    <h6>${Application.ActivePage.LocaleInfo.Slogan}</h6>
                </header>
            
                <hr />
            
                <div>
                    <nav title=${Application.Widgets["hamburger-menu"].LocaleText[3]}>
                        <h4>${Application.Widgets["hamburger-menu"].LocaleText[3]}</h4>
            
                        <ul>
                            ${Application.ActivePage.Related.map(s => html`
                            <li>
                                <a @click=${this.invertDialogOpen} href="${"/" + s}">
                                    <i class="icons-font">${Application.Pages[s].Icon}</i>
                                    <span class="typography--body2">${Application.Pages[s].LocaleInfo.ShortName}</span>
                                </a>
                            </li>
                            `)}
            
                            <hr />

                            <li>
                                <a @click=${this.invertDialogOpen} href=${"/landings/about-" + window.location.pathname.split('/')[1]}>
                                    <i class="icons-font">details</i>
                                    <span class="typography--body2">${Application.Widgets["hamburger-menu"].LocaleText[5]}</span>
                                </a>
                            </li>
                            <li ?checked=${Application.ActivePage === Application.Pages["localize"]}>
                                <a @click=${this.invertDialogOpen} href=${"/localize?redirect-url=" + window.location.href}>
                                    <i class="icons-font">language</i>
                                    <span class="typography--body2">${Application.Widgets["hamburger-menu"].LocaleText[1]}</span>
                                </a>
                            </li>
                            <li ?checked=${Application.ActivePage === Application.Pages["terms"]}>
                                <a @click=${this.invertDialogOpen} href="/terms">
                                    <svg viewBox="20 20 65 65">
                                        <path d="M57.466,21.248h-23.07c-3.044,0-5.521,2.477-5.521,5.521v46.463c0,3.044,2.477,5.521,5.521,5.521h31.209  c3.044,0,5.521-2.477,5.521-5.521V35.1L57.466,21.248z M58.629,28.125l5.715,5.795h-5.715V28.125z M67.125,73.231  c0,0.839-0.682,1.521-1.521,1.521H34.396c-0.839,0-1.521-0.682-1.521-1.521V26.769c0-0.839,0.682-1.521,1.521-1.521h20.233V37.92  h12.496V73.231z M38.824,68.72h22.352v-4H38.824V68.72z M38.824,58.16h22.352v-4H38.824V58.16z M38.824,47.6h22.352v-4H38.824V47.6z" />
                                    </svg>
                                    <span class="typography--body2">${Application.Widgets["hamburger-menu"].LocaleText[2]}</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
            
                    <!-- Share page!! -->
                    <!-- User see its activity in hamburger menu!?? use browser related api -->
                </div>
            </dialog>
        `
    }
    invertDialogOpen() {
        this.dialogOpen = !this.dialogOpen
    }
}
customElements.define('widget-hamburger-menu', WidgetHamburgerMenu)
