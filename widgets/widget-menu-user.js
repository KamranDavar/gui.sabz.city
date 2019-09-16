/* For license and copyright information please see LEGAL file in repository */

import { html, css, LitElement, unsafeCSS } from '../lit-element/lit-element.js'
import { GetUserData } from '../apis.sabz.city-SDK-JS/usersinfo/get-users-data.js'

Application.Widgets["user-menu"] = {
    ID: "user-menu",
    Text: {
        "en": [
            "Go to login page",
            "Go to sessions page",
            "Active user avatar"
        ],
        "fa": [
            "رفتن به صفحه ورود",
            "رفتن به صفحه نشست ها",
            "آواتار کاربر فعال",
        ],
    }
}

Application.Widgets["user-menu"].HTML = class extends LitElement {
    constructor() {
        super()
        this.userLoggedIn = false
        this.userPicture = "/images/not-login-user.svg"

        if (Application.UserPreferences.UsersState.ActiveUserID !== "") {
            this.userLoggedIn = true
            let userData = GetUserData(Application.UserPreferences.UsersState.ActiveUserID)
            if (userData.Picture !== "") this.userPicture = userData.Picture
        }
    }
    static get properties() {
        return {
            userLoggedIn: Boolean,
            userPicture: String, // Source address
        }
    }
    static get styles() {
        return css`
            @import '${unsafeCSS(Application.DesignLanguageStyles)}';

            a {
                display: inline-block;
            }

            img {
                border-radius: 50%;
                width: 32px;
                height: 32px;
                padding: 8px;
            }
        `
    }
    render() {
        return html`
            <a href=${this.userLoggedIn ? "/sessions" : "/login"} title=${this.userLoggedIn ?
                Application.Widgets["user-menu"].LocaleText[1] : Application.Widgets["user-menu"].LocaleText[0]}>
                <img alt=${Application.Widgets["user-menu"].LocaleText[2]} src=${this.userPicture} />
            </a>
        `
    }
}
customElements.define('widget-user-menu', Application.Widgets["user-menu"].HTML)
