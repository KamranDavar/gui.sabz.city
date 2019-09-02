/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["repo"] = {
    Info: {
        "en": { Name: "Repository", ShortName: "Repository", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "مخزن داده", ShortName: "مخزن داده", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "storage", Related: [],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["repo"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}
