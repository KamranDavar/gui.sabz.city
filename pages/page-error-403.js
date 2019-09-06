/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["error-403"] = {
    ID: "error-403",
    RecordID: "",
    Condition: {},
    State: "",
    Robots: "none",
    Info: {
        "en": { Name: "Forbidden - 403", ShortName: "403", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "ممنوع - 403", ShortName: "403", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "error", Related: [""],
    Text: {
        "en": [
            "",
            "403 Forbidden error",
            "Your client does not have permission to get needed data for this page to show"
        ],
        "fa": [
            "",
            "خطای ممنوعه 403",
            "دستگاه شما مجوز لازم برای اخذ اطلاعات مورد نیاز این صفحه را ندارد",
        ],
    }
}

Application.Pages["error-403"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Pages["error-403"].DisconnectedCallback = function () {
}
