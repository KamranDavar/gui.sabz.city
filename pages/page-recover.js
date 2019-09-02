/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["recover"] = {
    Info: {
        "en": { Name: "Recover Person Account", ShortName: "Recover", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "بازیابی حساب کاربری شخصی", ShortName: "بازیابی", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "history", Related: [],
    Text: {
        "en": [
            "",
            "Recover account",
            "Please choose one method to recover your account"
        ],
        "fa": [
            "",
            "بازیابی حساب کاربری",
            "لطفا یکی از روش های زیر را برای بازیابی اکانت خود انتخاب کنید"
        ],
    }
}

Application.Pages["recover"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Pages["recover"].next = function () {
    const card = window.document.getElementById('container')
    const animateOut = [{
        transform: ' translate(0) '
    },
    {
        transform: ' translateX(-100vw)'
    },
    ]
    const animateIn = [{
        transform: ' translate(100vw) '
    },
    {
        transform: ' translateX(0)'
    },
    ]
    const duration = 400
    const animation = card.animate(animateOut, duration)

    animation.onfinish = () => {
        card.animate(animateIn, duration)
        this.step = 'validate'
    }
}

Application.Pages["recover"].back = function () {
    const card = window.document.getElementById('container')
    const animateOut = [{
        transform: ' translate(0) '
    },
    {
        transform: ' translateX(100vw)'
    },
    ]
    const animateIn = [{
        transform: ' translate(-100vw) '
    },
    {
        transform: ' translateX(0)'
    },
    ]
    const duration = 400
    const animation = card.animate(animateOut, duration)

    animation.onfinish = () => {
        card.animate(animateIn, duration)
        this.step = 'select'
    }
}
