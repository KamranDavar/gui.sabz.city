/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["developers"] = {
    Info: {
        "en": { Name: "Developers Cloud Services", ShortName: "Developers", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "خدمات ابری توسعه دهندگان", ShortName: "توسعه دهندگان", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "code", Related: ["domains",],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["developers"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}
