/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Landings["about-finance"] = {
    ID: "about-finance",
    RecordID: "",
    Condition: {},
    State: "",
    Robots: "all",
    Info: {
        "en": { Name: "", ShortName: "", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "", ShortName: "", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "", Related: [],
    Text: {
        "en": [
            "",
            "Finance services",
            "Currency",
            "The SabzCity currency is its first ever digital correction currency, which without human intervention, is able to maintain its own ecosystem balance.",
            "Daric",
            "The official currency of the Achaemenid government, which can be called the first international currency, ",
            "The word 'Daric' for Persian is made up of two segments 'D' and 'Aric', the first part being the common denominator in many Indo-European languages, and the second part is 'Aric / Ari / Irani'. The word 'D' is still in the Pashto/Pashtun language (which is one of the languages of the Iranian language family). This is a common English word for 'The' in the English language",
        ],
        "fa": [
            "",
            "خدمات مالی",
            "واحد پول",
            "واحد پولی شهرسبز اولین ارز خود اصلاح شونده تمام دیجیتال می باشد که بدون دخالت انسانی قادر به حفظ تعادل اکوسیستم مالی خود را دارد",
            "دریک",
            "می توان از آن به عنوان اولین واحد پول بین المللی یاد کرد که واحد پول رسمی حکومت هخامنش بوده است",
            "واژه «دَریک» برای زبان فارسی از دو پاره «دْ» و «اَریک» ساخته شده که بخش نخستینِ آن، حرف معرفه متداول در بسیاری از زبان‌های هندواروپایی، و بخش دوم آن به مفهوم «اَری/ ایرانی» است. حرف معرفه «دْ» هنوز نیز در زبان پشتو/ پشتون (که یکی از زبان‌های خانواده زبان‌های ایرانی است) زنده مانده و برای مثال نام کشور را به شکل «د افغانستان» تلفظ می‌کنند. این حرف با حرف معرفه The در زبان انگلیسی خاستگاهی مشترک دارد",
        ],
    },
    HTML: "",
    CSS: "",
    Templates: {}
}

Application.Landings["about-finance"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Landings["about-finance"].DisconnectedCallback = function () {
}