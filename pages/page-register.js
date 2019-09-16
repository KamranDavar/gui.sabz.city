/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["register"] = {
    ID: "register",
    RecordID: null,
    Condition: {},
    State: "",
    Robots: "all",
    Info: {
        "en": { Name: "Register", ShortName: "Register", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "ثبت نام", ShortName: "ثبت نام", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "person_add", Related: ["login",],
    Text: {
        "en": [
            "",
            "Become resident in Sabz city",
            "It is very easy!! just fill these and wait we approve them",
            "Accept Terms!",
            "Register",
            "Already a resident? Login here!",
            "SabzCity resident terms",
            "By click 'I agree' you agree SabzCity resident terms.",
            "Read our Terms and Conditions",
            "Agree",
            "Decline",
            "Register easily by other platforms",
        ],
        "fa": [
            "",
            "درخواست اقامت در شهر سبز",
            "فرآیند اقامت آسان می باشد! فقط کافیست اطلاعات خواسته شده را پر نمایید و منتظر تائید از سمت ما باشید",
            "تائید شرایط اقامت",
            "ثبت نام",
            "اقامت دارید، از اینجا وارد شوید",
            "شرایط اقامت شهرسبز",
            "با انتخاب 'موافق هستم' شما با شرایط اقامت شهرسبز موافقت خواهید کرد.",
            "شرایط را از اینجا بخوانید",
            "موافق هستم",
            "نمی پذیرم",
            "ثبت نام راحت با استفاده از دیگر پلتفرم ها"
        ],
    },
    HTML: "",
    CSS: "",
    Templates: {}
}

Application.Pages["register"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Pages["register"].DisconnectedCallback = function () {
}

let acceptedTerms = false

Application.Pages["register"].toggleTermDialog = function () {
    window.document.getElementById("termDialog").showModal()
    window.document.getElementById("termDialogBack").hidden = !window.document.getElementById("termDialogBack").hidden
}

Application.Pages["register"].acceptTerms = function () {
    acceptedTerms = true
    window.document.getElementById("registerButton").disabled = false
    window.document.getElementById("termDialog").close()
    window.document.getElementById("termDialogBack").hidden = !window.document.getElementById("termDialogBack").hidden
}
Application.Pages["register"].declineTerms = function () {
    acceptedTerms = false
    window.document.getElementById("registerButton").disabled = true
    window.document.getElementById("termDialog").close()
    window.document.getElementById("termDialogBack").hidden = !window.document.getElementById("termDialogBack").hidden
}

Application.Pages["register"].register = function () {
    // send user to last page if exist or my home page as default login page
    if (Application.PreviousPage && Application.PreviousPage.ActiveURI) {
        window.location.replace(Application.PreviousPage.ActiveURI)
    } else {
        window.location.replace("/my")
    }
}
