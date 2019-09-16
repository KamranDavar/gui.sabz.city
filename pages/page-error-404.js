/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["error-404"] = {
    ID: "error-404",
    RecordID: "",
    Condition: {},
    State: "",
    Robots: "none",
    Info: {
        "en": { Name: "Page Not Found - 404", ShortName: "404", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "صفحه مورد نظر یافت نشد - 404", ShortName: "404", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "error", Related: [""],
    Text: {
        "en": [
            "",
            "404 - Page Not Found",
            "Look like you're lost!",
            "The page you are looking for not available!",
            "Go to Home"
        ],
        "fa": [
            "",
            "صفحه مورد نظر یافت نشد - 404",
            "بنظر میرسد گم شده اید",
            "صفحه ای که دنبالش میگردید وجود ندارد",
            "رفتن به خانه"
        ],
    },
    HTML: "",
    CSS: "",
    Templates: {}
}

Application.Pages["error-404"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Pages["error-404"].DisconnectedCallback = function () {
}