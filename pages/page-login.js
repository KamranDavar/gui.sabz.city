/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["login"] = {
    ID: "login",
    RecordID: "",
    Condition: {
        "redirect-url": "",
    },
    State: "",
    Robots: "all",
    Info: {
        "en": { Name: "Login", ShortName: "Login", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "ورود", ShortName: "ورود", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "fingerprint", Related: ["register", "recover"],
    Text: {
        "en": [
            "",
            "Login",
            "Enter your username, email, mobile, ...",
            "Next",
            "Not become resident yet? Do it now!",
            "Enter your password",
            "Remember me",
            "Login",
            "Forget password! Recover your account here!",
            "Password",
            "username, email, mobile, ...",
            "Login easily by other platforms",
        ],
        "fa": [
            "",
            "ورود",
            "موبایل، ایمیل یا نام کاربری خود را وارد نمایید",
            "بعدی",
            "هنوز درخواست اقامت نداده اید، از اینجا اقدام کنید",
            "رمز عبور خود را وارد نمایید",
            "مرا به خاطر بسپار",
            "ورود",
            "رمز عبور خود را فراموش کرده اید! از اینجا بازیابی کنید",
            "رمز عبور",
            "موبایل، ایمیل یا نام کاربری",
            "ورود راحت با استفاده از دیگر پلتفرم ها",
        ],
    },
    HTML: "",
    CSS: "",
    Templates: {}
}

Application.Pages["login"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Pages["login"].DisconnectedCallback = function () {
}

// userID: String,
// userName: String,
// twoStep: Boolean,

Application.Pages["login"].next = function () {
    // Validate input data

    // Warn about privacy changes and store needed cookie or local storage

    const usernamePhase = window.document.getElementById('usernamePhase')
    const passwordPhase = window.document.getElementById('passwordPhase')

    const animation = usernamePhase.animate(animateSwapLeftOut, animateDuration)
    animation.onfinish = () => {
        usernamePhase.hidden = true
        passwordPhase.hidden = false
        passwordPhase.animate(animateSwapRightIn, animateDuration)
    }
}

Application.Pages["login"].back = function () {
    const usernamePhase = window.document.getElementById('usernamePhase')
    const passwordPhase = window.document.getElementById('passwordPhase')

    const animation = passwordPhase.animate(animateSwapRightOut, animateDuration)
    animation.onfinish = () => {
        passwordPhase.hidden = true
        usernamePhase.hidden = false
        usernamePhase.animate(animateSwapLeftIn, animateDuration)
    }
}

Application.Pages["login"].login = function () {
    // Send login data to apis.sabz.city

    // add usersID to UsersState
    Application.UserPreferences.UsersState.ActiveUserID = ""
    Application.UserPreferences.UsersState.UsersID.push(Application.UserPreferences.UsersState.ActiveUserID)

    // send user to redirect-url if exist or my home page as default login page
    if (Application.Pages["login"].Condition["redirect-url"]) Application.Pages["login"].Condition["redirect-url"] = "/my"
    window.location.replace(Application.Pages["login"].Condition["redirect-url"])
}

// Animation const helper
const animateDuration = 400
const animateSwapRightIn = [
    {
        transform: ' translate(100vw) '
    }, {
        transform: ' translateX(0)'
    },
]
const animateSwapRightOut = [
    {
        transform: ' translate(0) '
    }, {
        transform: ' translateX(100vw)'
    },
]
const animateSwapLeftIn = [
    {
        transform: ' translate(-100vw) '
    }, {
        transform: ' translateX(0)'
    },
]
const animateSwapLeftOut = [
    {
        transform: ' translate(0) '
    }, {
        transform: ' translateX(-100vw)'
    },
]
