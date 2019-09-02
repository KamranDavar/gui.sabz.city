/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["terms"] = {
    Info: {
        "en": { Name: "Terms & Constitution", ShortName: "Terms", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "قانونی اساسی و شرایط اقامت", ShortName: "شرایط اقامت", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "", Related: [],
    Text: {
        "en": [
            "",
            "Terms",
        ],
        "fa": [
            "",
            "شرایط",
        ],
    }
}

Application.Pages["terms"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

export const ConstitutionText = {
    "en": [
        "Constitution",
        "",
    ],
    "fa": [
        "قانون اساسی",
        "حق آزادی بیان",
        "حق تشکیل اجتماعات",
        "حق رای دادن",
        "حق انتخاب و نامزد شدن",
        "حق مهاجرت",

        "قانون اساسی صرفا با رای 90% از کلیه شهروندان مقیم قابلیت تغییر دارد",
        "قوانین عادی با اکثریت آرا شهروندان مقیم یعنی 50+1% قابلیت اجرایی دارد",
        "فقط قانون هایی قابلیت تصویب و اجرا را دارند که ضمانت اجرایی مشخص و واقعی و بدون هزینه های سربار اضافه را دارا باشند",

        "هیچ گونه خرید و فروش کالا یا خدمات در مکان های اقامتی جامعه نمی تواند خارج از سیستم الکترونیکی (پلتفرم) انجام شود. ضمانت اجرایی این قانون تعلیق فرد خاطی می باشد",

        "خشونت فیزیکی به هر موجود زنده به عنوان جرم قابلیت پیگرد توسط جامعه را دارد",

        "در صورت عدم وجود قانون در یک موضوع خاص طرفین یک دعوا صرفا می بایستی مصالحه کنند و قاضی ها نمی توانند نظر یا برداشت شخصی خود را به هر یک از طرفین حکم کنند"
    ]
}