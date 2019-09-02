/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'
import '../widget-localize/widget-content-preferences.js'
import '../widget-localize/widget-presentation-preferences.js'

Application.Pages["localize"] = {
    Info: {
        "en": { Name: "Localize", ShortName: "Localize", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "محلی سازی", ShortName: "محلی سازی", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "language", Related: [],
    Text: {
        "en": [
            "",
            "Save",
        ],
        "fa": [
            "",
            "ذخیره",
        ],
    }
}

Application.Pages["localize"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Pages["localize"].doLocalize = function () {
    // Save user choose in related SabzCity API
    // SetUserInfo(UserState.ID) = Application.UserPreferences.ContentPreferences.Language.iso639_1 + "-" + Application.UserPreferences.ContentPreferences.Region.iso3166_1_a2

    const redirect = new URL(window.location.href).searchParams.get('redirect-url') || window.location.href
    const url = new URL(redirect)
    url.searchParams.set('hl', Application.UserPreferences.ContentPreferences.Language.iso639_1 + "-" + Application.UserPreferences.ContentPreferences.Region.iso3166_1_a2)
    window.location.replace(url)

    // !!?? Performance problem due we must change localize logic in every element from constructor to ...
    // Router(url)
}

