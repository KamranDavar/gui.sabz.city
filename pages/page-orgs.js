/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["orgs"] = {
    Info: {
        "en": { Name: "Organizations", ShortName: "Orgs", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "سازمان ها", ShortName: "سازمان ها", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "business", Related: ["register-org",],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["orgs"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}
