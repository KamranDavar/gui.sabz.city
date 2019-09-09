/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'
import '../widget-localize/widget-content-preferences.js'
import '../widget-localize/widget-presentation-preferences.js'

Application.Pages["localize"] = {
    ID: "localize",
    RecordID: null,
    Condition: {},
    State: "",
    Robots: "all",
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

Application.Pages["localize"].DisconnectedCallback = function () {
}

Application.Pages["localize"].doLocalize = function () {
    // Save user choose in related SabzCity API
    // SetUserInfo(UserState.ID) = Application.UserPreferences.ContentPreferences.Language.iso639_1 + "-" + Application.UserPreferences.ContentPreferences.Region.iso3166_1_a2

    if (Application.PreviousPage && Application.PreviousPage.ActiveURI) {
        Application.PreviousPage.ActiveURI.searchParams.set('hl', Application.UserPreferences.ContentPreferences.Language.iso639_1 + "-" + Application.UserPreferences.ContentPreferences.Region.iso3166_1_a2)
        window.location.replace(Application.PreviousPage.ActiveURI)
    } else {
        window.location.replace("/?hl=" + Application.UserPreferences.ContentPreferences.Language.iso639_1 + "-" + Application.UserPreferences.ContentPreferences.Region.iso3166_1_a2)
    }

    // TODO!!?? Problem due lit-element constructor styles and can't update.
    // Router(url)
}
