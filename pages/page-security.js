/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["security"] = {
    Info: {
        "en": { Name: "Security Settings", ShortName: "Security", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "تنظیمات امنیتی", ShortName: "امنیت", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "security", Related: [],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["security"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

// showMenu: Boolean,
// platforms: {
//     type: Array,
//     value() {
//         return [
//             { title: 'Instagram', group: 'brand', iconName: 'instagram' },
//         ]
//     }
// },
// devices: {
//     type: Array,
//     value() {
//         return [
//             {
//                 title: 'Nokia 5',
//                 icon: '',
//                 browser: 'Chrome 61.0',
//                 last: { location: 'Canada', time: '20 minutes ago' },
//                 latestLocations: [
//                     { location: 'Canada', time: '20 minutes ago' },
//                     { location: 'Canada', time: 'Yesterday, 10:53 PM' },
//                     { location: 'Canada', time: 'September 12, 2:04 PM' }
//                 ]
//             }
//         ]
//     }
// },
// apps: {
//     type: Array,
//     value() {
//         return [
//             {
//                 title: 'Auth0',
//                 icon: '',
//                 explain: 'Has access to basic account info',
//                 to: 'evernote.com',
//                 on: 'February 15, 8:50 PM',
//                 accessTitle: 'Basic account info',
//                 details: ['View your email address', 'View your basic info']
//             }
//         ]
//     }
// }
