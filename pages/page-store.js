/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'
import '../widgets/widget-product-search.js'

Application.Pages["store"] = {
    ID: "store",
    RecordID: null,
    Condition: {
        "q": "", // query
        "tags": [],
        "sort": "",
        "orgID": "",
        "wareHouseDistance": 0, // 0 means just near available product
        "lat": 0.0, // latitude
        "long": 0.0, // longitude
        "ownOrder": false, // all products user buy before
    },
    State: "",
    Info: {
        "en": { Name: "Store", ShortName: "Store", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "فروشگاه", ShortName: "فروشگاه", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "store", Related: ["invoices", "order-list", "compare-products"],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    },
    HTML: "",
    CSS: "",
    Templates: {
        "product": ""
    }
}

Application.Pages["store"].ConnectedCallback = function () {
    window.document.body.innerHTML = Application.ActivePage.HTML

    if (Application.Pages["store"].Condition["q"] !== "" ||
        Application.Pages["store"].Condition["tags"].length !== 0 ||
        Application.Pages["store"].Condition["sort"] !== "") {
        let products = ["12345"]
        products.map(id => {
            window.document.getElementById("productsMain")
                .insertAdjacentHTML('beforeend', Application.Pages["store"].getProduct(id))
        })
    } else {
        // TODO : Persistence state in time line even if route occur!
        let products = ["12345", "5453", "5454", "8547", "8889"]
        products.map(id => {
            window.document.getElementById("productsMain")
                .insertAdjacentHTML('beforeend', Application.Pages["store"].getProduct(id))
        })
    }
}

Application.Pages["store"].DisconnectedCallback = function () {
    // reset last page state and conditions
    Application.Pages["store"].Condition["q"] = ""
    Application.Pages["store"].Condition["tags"] = []
    Application.Pages["store"].Condition["sort"] = ""
}

/**
 * getProduct use to get product detail and return details in html object
 * @param {string} uuid Product UUID
 */
Application.Pages["store"].getProduct = function (uuid) {
    // Get product details by given ID
    const p = Application.Pages["store"].TestData[uuid]
    if (p) return eval('`' + Application.Pages["store"].Templates["product"] + '`')
}

Application.Pages["store"].TestData = {
    "12345": {
        ID: "12345",
        Name: "Where the Crawdads Sing",
        Pictures: [
            "https://images-na.ssl-images-amazon.com/images/I/81WWiiLgEyL._AC_UL480_SR318,480_.jpg"
        ],
        Price: 14,
        DiscountPercent: 10,
        Tags: ["", ""],
    },
    "5453": {
        ID: "5453",
        Name: "Fire TV Stick 4K with Alexa Voice Remote, streaming media player",
        Pictures: [
            "https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg"
        ],
        Price: 49.99,
        DiscountPercent: 10,
        Tags: ["", ""],
    },
    "5454": {
        ID: "5454",
        Name: 'Intex River Run I Sport Lounge, Inflatable Water Float, 53" Diameter',
        Pictures: [
            "https://images-na.ssl-images-amazon.com/images/I/61KBtaWa%2B-L._AC_UL320_SR320,320_.jpg"
        ],
        Price: 22.99,
        DiscountPercent: 0,
        Tags: ["", ""],
    },
    "8547": {
        ID: "8547",
        Name: "KORSIS Women's Summer Casual T Shirt Dresses Short Sleeve Swing Dress Pockets",
        Pictures: [
            "https://images-na.ssl-images-amazon.com/images/I/51iKmLOFhjL._AC_UL320_SR258,320_.jpg"
        ],
        Price: 22.99,
        DiscountPercent: 0,
        Tags: ["", ""],
    },
    "8889": {
        ID: "8889",
        Name: 'Womens and Mens Kids Water Shoes Barefoot Quick-Dry Aqua Socks for Beach Swim Surf Yoga Exercise',
        Pictures: [
            "https://images-na.ssl-images-amazon.com/images/I/71pVY69VM0L._AC_UL320_SR320,320_.jpg"
        ],
        Price: 13.58,
        DiscountPercent: 0,
        Tags: ["", ""],
    },
}