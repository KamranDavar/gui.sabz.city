/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'
import '../widgets/widget-product-search.js'

Application.Pages["store"] = {
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
    }
}

// query: String,
// tags: Array,
// sort: String,
// orgID: String,
// wareHouseDistance: Number, // 0 means just near available product
// lat: Number, // latitude
// long: Number, // longitude
// ownOrder: Boolean, // all products user buy before

Application.Pages["store"].ConnectedCallback = function () {
    const url = new URL(window.location.href)
    this.query = url.searchParams.get('q')
    this.tags = url.searchParams.get('tags')//.split(",")
    this.sort = url.searchParams.get('sort')
    if (this.query || this.tags || this.sort) {
        this.products = ["12345"]
    } else {
        this.products = ["12345", "5453", "5454", "8547", "8889"]
    }
    
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')

    this.products.map(id => {
        window.document.getElementById("productsMain")
            .insertAdjacentHTML('beforeend', Application.Pages["store"].getProduct(id))
    })
}

/**
 * getProduct use to get product detail and return details in html object
 * @param {string} uuid Product UUID
 */
Application.Pages["store"].getProduct = function (uuid) {
    // Get product details by given ID
    let p = {
        ID: "",
        Name: "",
        Pictures: [""],
        Price: 0,
        DiscountPercent: 0,
    }
    p = testData[uuid]
    if (p) return `
            <section class="card span-3" title="Product detail">
                <a href=${"/product/" + p.ID}>
                    <header>
                        <img src=${p.Pictures[0]} alt=${p.Name} />
                        <h2 class="typography--subtitle1">${p.Name}</h2>
                    </header>
                    <div>
                        <span>Quality stars</span>
                        <span>User give stars number</span>
                    </div>
                    <div>
                        <span title="Discount percent">${p.DiscountPercent}</span>
                        <del title="Real price">${p.Price}</del>
                        <span title="Payable price">${p.Price * (100 - p.DiscountPercent) / 100}</span>
                        <span title="Currency">${Application.UserPreferences.ContentPreferences.Currency.symbol}</span>

                        <span title="Discount end time"></span>
                        <span title="Discount claimed bar"></span>
                        <span title="Discount claimed percent"></span>
                    </div>
                </a>
                <footer>
                    <input type="checkbox" role="checkbox" id="compare" />
                    <label for="compare" hidden>Compare</label>
            
                    <button id="addToCard" class="raised" title="Add to card" @click=>
                        <i class="icons-font">add_shopping_cart</i>
                    </button>
                </footer>
            </section>
        `
}

export let testData = {
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