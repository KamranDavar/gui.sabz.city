/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["aboutme"] = {
    Info: {
        "en": { Name: "AboutMe", ShortName: "AboutMe", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "درباره من", ShortName: "درباره من", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "person", Related: [],
    Text: {
        "en": [
            ""
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["aboutme"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

// avatarContainers: {
//     type: Array,
//         value() {
//         return [
//             { firstName: 'cristopher', lastName: 'nolan', nickName: 'the magician' },
//         ];
//     }
// },
// infoSections: {
//     type: Array,
//         value() {
//         return [
//             { name: 'gender', value: 'male' },
//         ];
//     }
// },
// customCards: {
//     type: Array,
//         value() {
//         return [
//             { title: 'address', id: '1', value: '' },
//         ];
//     }
// }