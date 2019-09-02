/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["domains"] = {
    Info: {
        "en": { Name: "Domains", ShortName: "Domains", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "دامنه ها", ShortName: "دامنه ها", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "copyright", Related: [],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["domains"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

/* 
- Can set A, AAAA, DEV(non-standard), ...
- DEV is SabzCity auto scale secure app repository that set AAAA records that is read only for developers!!
- 
*/