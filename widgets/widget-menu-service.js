/* For license and copyright information please see LEGAL file in repository */

import { html, css, LitElement, unsafeCSS } from '../lit-element/lit-element.js'

Application.Widgets["service-menu"] = {
    Text: {
        "en": [
            "Find services easily by typing name!",
            "See all services & personalize menu",
            "Services menu",
        ],
        "fa": [
            "سرویس ها را با تایپ نامشان پیدا کنید!",
            "دیدن همه سرویس ها و شخصی سازی منو",
            "منوی سرویس ها",
        ],
    }
}

export class WidgetServiceMenu extends LitElement {
    // constructor() {
    //     super()
    // }
    connectedCallback() {
        super.connectedCallback()
        this.activeMostUsedPages = Application.UserPreferences.MostUsedPages || Application.MostUsedPages
    }
    static get properties() {
        return {
            dialogOpen: Boolean, // default is false
        }
    }
    static get styles() {
        return css`
            @import '${unsafeCSS(Application.DesignLanguageStyles.href)}';

            dialog {
                position: absolute;
                margin-right: 0;
                width: 300px;
                top: 64px;
                right: 48px;
            }

            li {
                display: inline-block;
                vertical-align: middle;
                text-align: center;
                height: 90px;
                width: 60px;
            }

            .icons-font {
                font-size: 30px;
                margin-top: 20%;
            }

            .typography--body2 {
                margin:auto;
                display:table;
            }

            dialog > a {
                text-align: center;
                padding: 5%;
            }
        `
    }
    render() {
        return html`
            <button type="button" class="icon" @click=${this.toggleDialogOpen} title=${Application.Widgets["service-menu"].LocaleText[2]} aria-haspopup="true" aria-controls="serviceMenu"
                .aria-expanded=${this.dialogOpen} accesskey="m">
                <svg viewBox="0 0 24 24">
                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
            </button>
            
            <div class="disabledBackground" @click=${this.toggleDialogOpen} ?hidden=${!this.dialogOpen}></div>
            <dialog type=modal id="serviceMenu" ?open=${this.dialogOpen}>
                <!-- more than 100 services and apps! find it easily by typing! -->
                <div>
                    <input id="findInput" type="text" @input=${this.findServices}>
                    <label for="findInput">${Application.Widgets["service-menu"].LocaleText[0]}</label>
                </div>
            
                <nav title="SabzCity services">
                    <ul>
                        ${this.activeMostUsedPages.map(s => html`
                        <li ?checked=${Application.ActivePage.ID === s} draggable="true">
                            <a @click=${this.toggleDialogOpen} href=${"/" + s} title=${Application.Pages[s].LocaleInfo.Name}>
                                <i class="icons-font">${Application.Pages[s].Icon}</i>
                                <span class="typography--body2">${Application.Pages[s].LocaleInfo.ShortName}</span>
                            </a>
                        </li>
                        `)}
                    </ul>
                </nav>
            
                <hr />
            
                <!-- User can change services order and defaults -->
                <a href="" @click=${this.toggleDialogOpen}>${Application.Widgets["service-menu"].LocaleText[1]}</a>
            </dialog>
        `
    }
    toggleDialogOpen() {
        this.dialogOpen = !this.dialogOpen
        // Input must get focus on physical keyboard || not have small screen!
        if (this.dialogOpen && window.navigator.maxTouchPoints === 0) this.shadowRoot.getElementById("findInput").focus()
        // ??TODO?? reset menu order to default when closing dialog??
        // activeMostUsedPages = Application.UserPreferences.MostUsedPages || Application.MostUsedPages
    }
    findServices() {
        const findInput = this.shadowRoot.getElementById("findInput")
        if (findInput.value === "") {
            this.activeMostUsedPages = Application.UserPreferences.MostUsedPages || Application.MostUsedPages
        } else {
            this.activeMostUsedPages = Object.keys(Application.Pages)
                .filter(s => {
                    let page = Application.Pages[s]
                    return page.LocaleInfo.Name.toLowerCase().includes(findInput.value.toLowerCase()) ||
                        page.LocaleInfo.ShortName.toLowerCase().includes(findInput.value.toLowerCase())
                })
        }
        this.requestUpdate()
    }
}
customElements.define('widget-service-menu', WidgetServiceMenu)
