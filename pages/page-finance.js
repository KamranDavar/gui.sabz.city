/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["finance"] = {
    Info: {
        "en": { Name: "Finance", ShortName: "Finance", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "خدمات مالی", ShortName: "مالی", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "account_balance", Related: ["invoices", "wallet", "stock-exchange", "foreign-exchange"],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["finance"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}
