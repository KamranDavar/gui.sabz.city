/* For license and copyright information please see LEGAL file in repository */

import { Languages } from './languages.js'
import { Regions } from './regions.js'
import { html } from '../lit-html/lit-html.js';

/**
 * Experimental "Application" objects use to expand default browser window object!
 * Application default data just use if user have not distinction yet otherwise user defaults in Application.UserPreferences will used!
 */
window.Application = {
    Icon: "", // Image location
    Info: { // !! Security Warning !! app name and icon must have approved mechanism with domain register process!!
        "": { Name: "", ShortName: "", Tagline: "", Slogan: "", Description: "", Tags: [] },
    },
    LocaleInfo: {}, // Add auto by Application.Localize() method
    ContentPreferences: {  // HTML Preferences
        Languages: ["", "", "",], // Supported languages by app in In iso639_1 format
        Language: {},
        Charset: "", // "utf-8" || 
        Currencies: ["", ""], // Supported currencies by app In ISO_4217
        Currency: {},
    },
    PresentationPreferences: {  // CSS Preferences
        DesignLanguage: "", // "material" || "flat" || ""
        Contrast: "", // "no-preference" || "high" || "low"
        ColorScheme: "", // "no-preference" || "light" || "dark"
        ThemeColor: "", // ?? Duplicate with PrimaryColor CSS variable!!??
        InvertedColors: Boolean,
        ReducedMotion: Boolean,
        ReducedTransparency: Boolean,
        PrimaryFontFamily: "",
        SecondaryFontFamily: "",
        Display: "", // "fullscreen" || "standalone" || "minimal-ui" || "browser" https://developer.mozilla.org/en-US/docs/Web/Manifest/display
        Orientation: "", // "any" || "natural" || "landscape" || "portrait" https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation
        Viewport: {} // https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
    },
    HomePage: "", // Application start page from written list keys
    ActivePage: null,
    MostUsedPages: [""],
    // Pages store all services (pages) and in locales names. keys is use for page name in URL too.
    // Can load all pages element on start || load most used pages || lazy-load on user request! (better idea??)
    Pages: {
        "": {
            Info: {
                "": { Name: "", ShortName: "", Tagline: "", Slogan: "", Description: "", Tags: [] },
            },
            LocaleInfo: {}, // Add auto by Application.Localize() method
            HTML: null, CSS: null, Icon: "", Related: ["", ""]
        },
    },
    Landings: {},
    Widgets: {},
    UserPreferences: {
        ContentPreferences: {
            Language: {
                englishName: "",
                nativeName: "",
                iso639_1: "",
                iso639_2T: "",
                iso639_2B: "",
                iso639_3: "",
                dir: "",
            },
            Region: {
                englishName: "",
                nativeName: "",
                iso3166_1_a2: "",
                iso3166_1_a3: "",
                iso3166_1_num: "",
                phone: "",
                continent: "",
                capital: "",
                currency: "",
                languages: [""]
            },
            Currency: {
                englishName: "",
                nativeName: "",
                iso4217: "",
                iso4217_num: 0,
                symbol: "",
            },
        },
        PresentationPreferences: {
            DesignLanguage: "material",
            Contrast: "",
            ColorScheme: "no-preference",
            InvertedColors: Boolean,
            ReducedMotion: Boolean,
            ReducedTransparency: Boolean,
            PrimaryFontFamily: "Roboto",
            SecondaryFontFamily: "",
        },
        UsersState: { // Store user data state!
            ActiveUserID: "",
            UsersID: [],
        },
        HomePage: "",
        MostUsedPages: null, // []
        // Misc or miscellaneous key use by any page or widget to store needed persistent locale data
        Misc: {}
    },
    DesignLanguageStyles: "", // Link element, Add auto by Application.LoadDesignLanguageStyles() method
    PrimaryFont: null, // FontFace(), Add auto by Application.LoadFontFamilies() method
    SecondaryFont: null, // FontFace(), Add auto by Application.LoadFontFamilies() method
}

/**
 * Load active design language styles indicated in user preferences!
 */
Application.LoadDesignLanguageStyles = function () {
    if (Application.UserPreferences.PresentationPreferences.DesignLanguage === "material") {
        Application.DesignLanguageStyles.href = "/design-languages/design-language--material.css"

        // Load related icon font family
        // https://fonts.googleapis.com/icon?family=Material+Icons
        const iconsFont = new FontFace('Material Icons', 'url(https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)');
        iconsFont.load()
        window.document.fonts.add(iconsFont)
    } else if (Application.UserPreferences.PresentationPreferences.DesignLanguage === "flat") Application.DesignLanguageStyles.href = "/design-languages/design-language--flat.css"
    else if (Application.UserPreferences.PresentationPreferences.DesignLanguage === "fluent") Application.DesignLanguageStyles.href = "/design-languages/design-language--fluent.css"
    else if (Application.UserPreferences.PresentationPreferences.DesignLanguage === "ant") Application.DesignLanguageStyles.href = "/design-languages/design-language--ant.css"
}

/**
 * Load active font families by their names in user preferences!
 */
Application.LoadFontFamilies = function () {
    if (Application.UserPreferences.PresentationPreferences.PrimaryFontFamily === "Roboto") {
        // https://fonts.googleapis.com/css?family=Roboto
        Application.PrimaryFont = new FontFace('Roboto', 'url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu72xKOzY.woff2)');
        Application.PrimaryFont.load()
        window.document.fonts.add(Application.PrimaryFont)
    }
}

/**
 * Set active color scheme
 * Use generic variables to easy change theme (theming) anywhere.
 */
Application.LoadColorScheme = function () {
    if (Application.UserPreferences.PresentationPreferences.ColorScheme === "no-preference") {
        // get browser or OS preference
        cssVariablesElement.href = "/design-languages/variables-light.css"
    } else if (Application.UserPreferences.PresentationPreferences.ColorScheme === "dark") cssVariablesElement.href = "/design-languages/variables-light.css"
    else if (Application.UserPreferences.PresentationPreferences.ColorScheme === "light") cssVariablesElement.href = "/design-languages/variables-light.css"
}

let pageStylesElement
let cssVariablesElement

function init() {
    Application.DesignLanguageStyles = window.document.createElement("link")
    Application.DesignLanguageStyles.rel = "stylesheet"
    Application.DesignLanguageStyles.type = "text/css"
    window.document.head.appendChild(Application.DesignLanguageStyles)

    pageStylesElement = window.document.createElement("style")
    window.document.head.appendChild(pageStylesElement)

    cssVariablesElement = window.document.createElement('link')
    cssVariablesElement.rel = "stylesheet"
    cssVariablesElement.type = "text/css"
    window.document.head.appendChild(cssVariablesElement)

    // Check user last user preferences state if exist!
    let up = localStorage.getItem('UserPreferences')
    if (up) copyObject(JSON.parse(up), Application.UserPreferences)

    Application.LoadDesignLanguageStyles()
    Application.LoadFontFamilies()
    Application.LoadColorScheme()
}
init()

/**
 * https://webmasters.googleblog.com/2013/04/x-default-hreflang-for-international-pages.html
 * <link rel="alternate" href="http://example.com/" hreflang="x-default" />
 */
let defaultElement
/**
 * Store supported languages links to update in each URL changed.
 * https://support.google.com/webmasters/answer/189077?hl=en
 */
let supportedLanguagesHref = []

/**
 * Initialize method use to set||update app data so never change reference of Application to set||update data.
 * Function app parameter structure is Application object with as much as you want custom data!
 */
Application.Initialize = function (app) {
    Application = { ...Application, ...app }

    // Check and set Application.UserPreferences data like language and region in stateless manner if needed!
    if (Application.UserPreferences.ContentPreferences.Language.englishName === "") {
        Application.Polyfill.SuggestLanguage()
        // If above solution not work, use default application language
        if (Application.UserPreferences.ContentPreferences.Language.englishName === "") {
            Application.UserPreferences.ContentPreferences.Language = Application.ContentPreferences.Language
        }
    }
    if (Application.UserPreferences.ContentPreferences.Currency.nativeName === "") {
        Application.UserPreferences.ContentPreferences.Currency = Application.ContentPreferences.Currency
    }

    if (Application.UserPreferences.PresentationPreferences.DesignLanguage === "") {
        Application.UserPreferences.PresentationPreferences.DesignLanguage = Application.PresentationPreferences.DesignLanguage
    }
    if (Application.UserPreferences.PresentationPreferences.ColorScheme === "") {
        Application.UserPreferences.PresentationPreferences.ColorScheme = Application.PresentationPreferences.ColorScheme
    }
    if (Application.UserPreferences.PresentationPreferences.PrimaryFontFamily === "") {
        Application.UserPreferences.PresentationPreferences.PrimaryFontFamily = Application.PresentationPreferences.PrimaryFontFamily
    }

    Application.Localize()

    Application.Polyfill()
    Application.Polyfill.SetLangAndDir()
    Application.Polyfill.SupportedLanguagesAlternateLink()
}

/**
 * copyObject use to copy an object by structure and values to other!
 * @param {object} src 
 * @param {object} copyTo 
 */
function copyObject(src, copyTo) {
    /**
     * if conflict set to true it means copy objects have conflicts in all or some keys or values
     */
    let conflict = false

    for (let key in copyTo) {
        if (typeof src[key] === "undefined") {
            conflict = true
            continue
        }

        if (typeof copyTo[key] === 'object') {
            if (typeof src[key] !== 'object') {
                conflict = true
                continue
            }

            copyObject(src[key], copyTo[key])
        } else {
            copyTo[key] = src[key]
        }
    }

    return conflict
}

/**
 * Localize method use to set just locale data to app and pages Info
 * Call this method just after Application.Initialize() method.
 */
Application.Localize = function () {
    Application.LocaleInfo = Application.Info[Application.UserPreferences.ContentPreferences.Language.iso639_1]
    for (let key in Application.Pages) {
        let page = Application.Pages[key]
        page.LocaleInfo = page.Info[Application.UserPreferences.ContentPreferences.Language.iso639_1]
        page.LocaleText = page.Text[Application.UserPreferences.ContentPreferences.Language.iso639_1]
    }
    for (let key in Application.Widgets) {
        let widget = Application.Widgets[key]
        widget.LocaleText = widget.Text[Application.UserPreferences.ContentPreferences.Language.iso639_1]
    }
}

/** 
 * Router will lazy loading and also add related page element to body!
 * @param {string} requestedPageName
 * @param {string} resourceUUID
 */
Application.Router = function (requestedPageName, resourceUUID) {
    // Tell others about new routing to do whatever they must do on url change!
    window.dispatchEvent(new Event('urlChanged'))

    // Find and show requested app if it loaded before!
    Application.ActivePage = Application.Pages[requestedPageName]
    if (Application.ActivePage) {
        // lazy load requestedPageName files if not loaded before. It will just use for development phase!
        if (!Application.ActivePage.HTML) {
            fetch("/pages/page-" + requestedPageName + ".html").then(res => res.text()).then(res => {
                Application.Pages[requestedPageName].HTML = res
                Application.Pages[requestedPageName].ConnectedCallback()
            })
            fetch("/pages/page-" + requestedPageName + ".css").then(res => res.text()).then(res => {
                Application.Pages[requestedPageName].CSS = res
                pageStylesElement.innerHTML = res
            })
        }
        // Add page HTML & CSS to DOM
        else {
            pageStylesElement.innerHTML = Application.ActivePage.CSS
            Application.ActivePage.ConnectedCallback()
        }

        // Update page title with page full name and update some meta tags! 
        window.document.title = Application.ActivePage.LocaleInfo.Name
        window.document.description.content = Application.ActivePage.LocaleInfo.Description
        // Twitter card  https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html
        // The Open Graph protocol https://www.ogp.me/
    }
    // Load landing by name or ID
    else if (requestedPageName = "landings" && resourceUUID) {
        Application.ActivePage = Application.Landings[resourceUUID]
        if (!Application.ActivePage) {
            import("/landings/landing-" + resourceUUID + ".js")
                .then(() => {
                    Application.ActivePage = Application.Landings[resourceUUID]
                    Application.Landings[resourceUUID].LocaleText = Application.Landings[resourceUUID].Text[Application.UserPreferences.ContentPreferences.Language.iso639_1]
                    fetch("/landings/landing-" + resourceUUID + ".html").then(res => res.text()).then(res => {
                        Application.ActivePage.HTML = eval('`' + res + '`')
                        window.document.body.innerHTML = Application.ActivePage.HTML
                    })
                    fetch("/landings/landing-" + resourceUUID + ".css").then(res => res.text()).then(res => {
                        Application.ActivePage.CSS = res
                        pageStylesElement.innerHTML = res
                    })
                })
                .catch(err => Application.Router("error-404", ""))
        } else {
            pageStylesElement.innerHTML = Application.ActivePage.CSS
            window.document.body.innerHTML = Application.ActivePage.HTML
        }
        // Update page title with page full name and update some meta tags! 
        window.document.title = Application.ActivePage.LocaleInfo.Name
        window.document.description.content = Application.ActivePage.LocaleInfo.Description
    } else {
        console.log("Requested page not exist")
        Application.Router("error-404", "")
        return
    }
}

/**
 * Save method use to write active Application UserPreferences to browser localStorage.
 */
Application.Save = function () {
    localStorage.setItem('UserPreferences', JSON.stringify(Application.UserPreferences))
}


/**
 * Add some meta and link tag to header if user not install web app yet for not supported Application!!
 * This method can use just if you call Application.Localize() due we need some locale data!
 */
Application.Polyfill = function () {
    // If description meta tag is important why it doesn't have document object like title!!?
    // We add it here to update it content later dynamically on every page.
    window.document.description = document.createElement('meta')
    window.document.description.name = "description"
    window.document.head.appendChild(window.document.description)

    // Register service-worker.js
    // service-worker will be removed as soon as we can find other solution to control app by main function!
    if ('serviceWorker' in window.navigator) window.navigator.serviceWorker.register('/widget-localize/sw.js', { scope: "/" })

    if (window.matchMedia('(display-mode: browser)').matches) {
        // Warn users about console self attack.
        console.log('%cWARNING!', 'background:yellow; color:red; font-size:x-large')
        console.log(`%c\nUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. Do not enter or paste code that you do not understand. \n`, 'font-size:large')
        // Attention developer to join SabzCity open source
        console.log('%cJoin SabzCity open source Platform: https://github.com/sabzcity', 'background:green;color:white;font-size:large')

        // Add icon
        const icon = document.createElement('link')
        icon.rel = "icon"
        icon.href = Application.Icon
        window.document.head.appendChild(icon)

        // Add iOS meta tags and icons
        const appleTitle = document.createElement('meta')
        appleTitle.name = "apple-mobile-web-app-title"
        appleTitle.content = Application.LocaleInfo.Name
        window.document.head.appendChild(appleTitle)

        const appleCapable = document.createElement('meta')
        appleCapable.name = "apple-mobile-web-app-capable"
        appleCapable.content = "yes"
        window.document.head.appendChild(appleCapable)

        const appleBarStyle = document.createElement('meta')
        appleBarStyle.name = "apple-mobile-web-app-status-bar-style"
        appleBarStyle.content = Application.PresentationPreferences.ThemeColor
        window.document.head.appendChild(appleBarStyle)

        const appleIcon = document.createElement('link')
        appleIcon.rel = "apple-touch-icon"
        appleIcon.href = Application.Icon
        window.document.head.appendChild(appleIcon)

        // Add Chrome meta tags and icons
        const appName = document.createElement('meta')
        appName.name = "application-name"
        appName.content = Application.LocaleInfo.Name
        window.document.head.appendChild(appName)

        const appCapable = document.createElement('meta')
        appCapable.name = "mobile-web-app-capable"
        appCapable.content = "yes"
        window.document.head.appendChild(appCapable)

        const appTheme = document.createElement('meta')
        appTheme.name = "theme-color"
        appTheme.content = Application.PresentationPreferences.ThemeColor
        window.document.head.appendChild(appTheme)

        // Add WebManifest
        const manifest = document.createElement('link')
        manifest.rel = "manifest"
        manifest.href = "data:application/manifest+json," + JSON.stringify({
            name: Application.LocaleInfo.Name,
            short_name: Application.LocaleInfo.ShortName,
            description: Application.LocaleInfo.Description,
            // theme_color: Application.PresentationPreferences.ThemeColor,
            display: Application.PresentationPreferences.Display,
            orientation: Application.PresentationPreferences.Orientation,
            start_url: "/" + Application.Pages.Home,
        })
        window.document.head.appendChild(manifest)
    }
}

/**
 * Set language and region from Application.UserPreferences to html tag of DOM!
 * Call it each time language or region changed
 */
Application.Polyfill.SetLangAndDir = function () {
    // change <html lang="en" dir="ltr"> in language change
    window.document.documentElement.lang = Application.UserPreferences.ContentPreferences.Language.iso639_1 + "-" + Application.UserPreferences.ContentPreferences.Region.iso3166_1_a2
    // window.document.dir = Application.UserPreferences.ContentPreferences.Language.dir
}

/**
 * Add supported languages alternate link to header and update href on every url changed!
 */
Application.Polyfill.SupportedLanguagesAlternateLink = function () {
    if (Application.ContentPreferences.Languages.length > 1) {
        // Add app supported languages links to header without href attributes!
        defaultElement = window.document.createElement('link')
        defaultElement.rel = "alternate"
        defaultElement.hreflang = "x-default"
        window.document.head.appendChild(defaultElement)

        Application.ContentPreferences.Languages.forEach(sl => {
            const element = window.document.createElement('link')
            element.rel = "alternate"
            element.hreflang = sl
            window.document.head.appendChild(element)
            supportedLanguagesHref.push(element)
        })

        // Update href attributes on url changed
        window.addEventListener('urlChanged', () => {
            const url = new URL(window.location.href)
            supportedLanguagesHref.forEach(slh => {
                url.searchParams.set('hl', slh.hreflang)
                slh.href = url
            })

            url.searchParams.delete('hl')
            defaultElement.href = url
        }, false)
    }
}

Application.Polyfill.SuggestLanguage = function () {
    // Check if language be in URL (hl query)
    let hl = new URL(window.location.href).searchParams.get('hl')
    if (hl && Application.ContentPreferences.Languages.includes(hl.split("-")[0])) {
        hl = hl.split("-")
        Application.UserPreferences.ContentPreferences.Language = Languages.find(l => l.iso639_1 === hl[0])
        if (hl[1]) Application.UserPreferences.ContentPreferences.Region = Regions.find(r => r.iso3166_1_a2 === hl[1])
    }
    // Check browser languages list!
    else {
        window.navigator.languages.some(l => {
            hl = l.split("-")
            if (hl[0] !== "" && Application.ContentPreferences.Languages.includes(hl[0])) {
                Application.UserPreferences.ContentPreferences.Language = Languages.find(l => l.iso639_1 === hl[0])
                if (hl[1]) Application.UserPreferences.ContentPreferences.Region.iso3166_1_a2 = Regions.find(r => r.iso3166_1_a2 === hl[1])
            }
        })
    }

    // Suggest language by user IP!
    import('/widget-localize/widget-suggest-language.js').then(
        window.document.documentElement.insertBefore(window.document.createElement("widget-suggest-language"), window.document.body)
    )
}


/**
 * 
 * Listeners
 * 
 */
function clickListener(event) {
    if (event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey) return

    const anchor = event.composedPath().find(n => n.tagName === 'A')
    if (!anchor || anchor.target || !anchor.href ||
        anchor.hasAttribute('download') ||
        anchor.getAttribute('rel') === 'external') return

    const goUrl = new URL(anchor.href)
    // don't pushState if the URL is for a different host! It also check for "mailto"!
    if (window.location.host !== goUrl.host) return

    // prevent the default link click
    event.preventDefault()

    // Don't act if requested page is same. It also prevent reload page in empty href.
    if (goUrl.href === window.location.href) return

    // push state into the history stack
    window.history.pushState(JSON.parse(anchor.getAttribute('state')) ||
        window.history.state, anchor.getAttribute('title'), anchor.href)

    // Do routing instead of reload page!
    Application.Router(goUrl.pathname.split('/')[1], goUrl.pathname.split('/')[2])
}
window.addEventListener('click', clickListener, false)

function stateChangeListener(event) {
    // prevent the default navigate
    event.preventDefault()

    // Do routing instead of reload page!
    Application.Router(window.location.pathname.split('/')[1], window.location.pathname.split('/')[2])
}
window.addEventListener('popstate', stateChangeListener, false)
window.addEventListener('pushState', stateChangeListener, false)

// Save UserPreferences on user exit app!
window.addEventListener('beforeunload', Application.Save, false)
