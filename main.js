/* For license and copyright information please see LEGAL file in repository */

import '/gui-engine-js/application.js'

import '/pages/page-.js'

import '/pages/page-my.js'
import '/pages/page-localize.js'
import '/pages/page-register.js'
import '/pages/page-login.js'
import '/pages/page-recover.js'
import '/pages/page-terms.js'
import '/pages/page-aboutme.js'
import '/pages/page-security.js'

import '/pages/page-orgs.js'
import '/pages/page-register-org.js'

import '/pages/page-finance.js'

import '/pages/page-developers.js'
import '/pages/page-domains.js'
import '/pages/page-repo.js'

import '/pages/page-store.js'
import '/pages/page-product.js'

import '/pages/page-error-403.js'
import '/pages/page-error-404.js'
import '/pages/page-error-500.js'

function init() {
    Application.Initialize(
        {
            Icon: "/images/app-icon-512x512.png",
            Info: {
                "en": { Name: "SabzCity", ShortName: "SabzCity", Tagline: "", Slogan: "Progress your lifestyle!", Description: "Innovative way and lifestyle to make nation!", Tags: [] },
                "fa": { Name: "شهرسبز", ShortName: "شهرسبز", Tagline: "", Slogan: "سبک زندگیتو ارتقا بده!", Description: "راه و سبک زندگی خلاقانه برای ساخت اجتماع", Tags: [] }
            },
            ContentPreferences: {
                Languages: ["en", "fa"],
                Language: {
                    englishName: "English",
                    nativeName: "English",
                    iso639_1: "en",
                    iso639_2T: "eng",
                    iso639_2B: "eng",
                    iso639_3: "eng",
                    dir: "ltr"
                },
                Currency: {
                    englishName: "SabzCity Derik",
                    nativeName: "SabzCity Derik",
                    iso4217: "SCD",
                    iso4217_num: 0,
                    symbol: "D",
                },
                Charset: "utf-8",
            },
            PresentationPreferences: {
                DesignLanguage: "material",
                ColorScheme: "no-preference",
                ThemeColor: "#66ff55",
                PrimaryFontFamily: "Roboto",
                Display: "standalone",
                Orientation: "portrait",
            },
            HomePage: "", // start with home page!
            MostUsedPages: [
                "my", "orgs", "finance", "developers", "store",
            ],
        }
    )
}
// Call init function to application work on not supported browsers!! that now there is no browser!! ;)
init()

function main() {
    // Do routing!
    Application.Router(window.location.pathname.split('/')[1], window.location.pathname.split('/')[2])
}
// Call main function to application work on not supported browsers!! that now there is no browser!! ;)
main()