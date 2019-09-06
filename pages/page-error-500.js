/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["error-500"] = {
    ID: "error-500",
    RecordID: "",
    Condition: {},
    State: "",
    Robots: "none",
    Info: {
        "en": { Name: "Internal App Error - 500", ShortName: "500", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "مشکل داخلی نرم افزار - 403", ShortName: "500", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "error", Related: [""],
    Text: {
        "en": [
            "",
            "500 - Internal App Error",
            "Sorry!",
            "It's not you, It's us.",
            "Go to Home"
        ],
        "fa": [
            "",
            "خطای داخلی نرم افزار - 404",
            "عذرخواهی!",
            "مشکل بوجود آمده از سمت ما می باشد",
            "رفتن به خانه"
        ],
    }
}

Application.Pages["error-500"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Pages["error-500"].DisconnectedCallback = function () {
}
