/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages[""] = {
    ID: "",
    RecordID: null,
    Condition: {},
    State: "",
    Robots: "all",
    Info: {
        "en": { Name: "SabzCity Home Page", ShortName: "Home", Tagline: "", Slogan: "Welcome to your city", Description: "", Tags: [] },
        "fa": { Name: "صفحه اصلی شهرسبز", ShortName: "خانه", Tagline: "", Slogan: "به شهر خودتان خوش آمدید", Description: "", Tags: [] }
    },
    Icon: "home", Related: ["login", "register"],
    Text: {
        "en": [
            "",
            "Progress your lifestyle!",
            "SabzCity is innovative nation governance, You can achieve new life, business, hopes and wishes in a new intelligent society",
            "Apply for citizenship",
            "Watch introduction",
            "Quick overview",
            "Persons",
            "All life processes from the management of things, financial and healthcare are managed with intelligence",
            "Businesses",
            "With the integration of the organization processes and the reduction of overhead costs, direct your business without challenge and give it a boost",
            "Ownership",
            "SabzCity is open-source; its design is public, nobody owns or controls it and everyone can take part.",
            "Future",
            "There are some interesting features beyond the imagination for you. We invite you to challenge the discovery and change of your life with these possibilities!",
            "Learn More",
            "Services overview",
            "Currency",
            "The SabzCity currency is its first ever digital correction currency, which without human intervention, is able to maintain its own ecosystem balance",
            "Store",
            "Order your goods directly from the manufacturer and delivery at home",
            "Insurance",
            "",
            "Transport",
            "",
            "Investment",
            "",
            "News",
            "",
            "Health",
            "",
            "Life",
            "",
        ],
        "fa": [
            "",
            "سبک زندگیتو ارتقا بده",
            "شهر سبز روشی نو از زندگی اجتماعی انسانهاست، در پلتفرم شهر سبز، تجربه و فرصت داشتن زندگی و کسب و کار جدید، برآورده شدن آرزوها و سلایق خود را با تعامل و همفکری در اجتماعی هوشمند در دسترس خواهید داشت",
            "درخواست تابعیت",
            "فیلم معرفی",
            "نگاهی سریع",
            "اشخاص",
            "تمام فرآیندهای زندگی از مدیریت وسایل زندگی تا مدیریت مالی و سلامتی شما با هوشمندی مدیریت می شود",
            "سازمان ها",
            "با یکپارچگی فرآیندهای سازمانی و کاهش هزینه های سربار، کسب و کار خود را بدون چالش هدایت کنید و به آن رونقی دوباره ببخشید",
            "مالکیت",
            "پلتفرم شهرسبز به صورت اپن سورس می باشد. معماری پلتفرم در دسترس عموم می باشد و هیچ فردی آنرا کنترل نمی کند و هر کسی می تواند جزئی از تیم توسعه آن باشد",
            "فراتر از تصور",
            "امکانات جالبی فراتر از تصور برای شما در شهرسبز وجود دارد. شما را به چالش کشف و تغییر زندگی خود با این امکانات دعوت می کنیم!",
            "بیشتر بخوانید",
            "سرویس ها",
            "واحد پول",
            "واحد پولی شهرسبز اولین ارز خود اصلاح شونده تمام دیجیتال می باشد که بدون دخالت انسانی قادر به حفظ تعادل اکوسیستم مالی خود را دارد",
            "فروشگاه",
            "کالاهای مورد نیاز خود را به صورت مستقیم از تولید کننده سفارش دهید و درب منزل تحویل بگیرید",
            "بیمه",
            "",
            "حمل و نقل",
            "",
            "سرمایه گذاری",
            "سرمایه گذاری در شهرسبز صرفا در سهام شرکت های اکوسیستم امکان پذیر می باشد. دلایل متعددی برای این تصمیم وجود دارد که مهترین آنها کمک شایان توجه به رشد سریع تر اکوسیستم و امنیت بیشتر سرمایه گذاری ها با امکان پخش سرمایه در صنایع و سازمان های متنوع بجای تمرکز در یک بخش مانند مسکن می باشد",
            "اخبار",
            "",
            "سلامتی",
            "",
            "زندگی",
            "",
        ],
    },
    HTML: "",
    CSS: "",
    Templates: {}
}

Application.Pages[""].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')
}

Application.Pages[""].DisconnectedCallback = function () {
}
