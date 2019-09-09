/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["my"] = {
    ID: "my",
    RecordID: null,
    Condition: {},
    State: "",
    Robots: "all",
    Info: {
        "en": { Name: "User Services", ShortName: "My", Tagline: "", Slogan: "Glance at your account", Description: "", Tags: [] },
        "fa": { Name: "خدمات کاربری", ShortName: "پنل کاربری", Tagline: "", Slogan: "نگاه کلی به حساب کاربری", Description: "", Tags: [] }
    },
    Icon: "person", Related: ["aboutme", "security", "groups", "settings", "sessions"],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["my"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}
