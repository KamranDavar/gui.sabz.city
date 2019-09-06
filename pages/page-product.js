/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["product"] = {
    ID: "product",
    RecordID: "",
    Condition: {},
    State: "",
    Robots: "all",
    Info: {
        "en": { Name: "Product", ShortName: "Product", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "محصول", ShortName: "محصول", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "shopping_cart", Related: ["store", "invoices", "order-list", "compare-products"],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

Application.Pages["product"].ProductDetail = {
    ID: "",
    Name: "",
    Pictures: [""],
    Price: 0,
    DiscountPercent: 0,
    Tags: ["", ""],
}

Application.Pages["product"].ConnectedCallback = function () {
    // Get product details
    Application.Pages["product"].ProductDetail = Application.Pages["store"].TestData[Application.Pages["product"].RecordID]
    if (Application.Pages["product"].RecordID && Application.Pages["product"].ProductDetail) {
        Application.Pages["product"].ProductDetail.suggested = ["5454", "5453",]
    } else {
        Application.Router("error-404", "")
    }
    // get user liked product before
    Application.Pages["product"].ProductDetail.Liked = false
    // checked product add to cart before
    this.addToCardDialogOpen = false

    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')

    Application.Pages["product"].getSuggestedProducts(Application.Pages["product"].RecordID)
}

Application.Pages["product"].DisconnectedCallback = function () {
}

Application.Pages["product"].getSuggestedProducts = function (UUID) {
    let suggestedProductsID = ["12345", "5453", "5454", "8547", "8889"]
    const suggestedProducts = window.document.getElementById("suggestedProducts")
    // listen to scrolling and if user go to end of page load related products and load until user requested
    suggestedProductsID.map(id => suggestedProducts.insertAdjacentHTML('beforeend', Application.Pages["store"].getProduct(id)))
}

Application.Pages["product"].addToCard = function () {
    this.addToCardDialogOpen = true
}

Application.Pages["product"].toggleLikeProduct = function () {
    // first send like request to server
    const likeButton = window.document.getElementById("likeButton")
    likeButton.setAttribute("checked", "")
    Application.Pages["product"].ProductDetail.Liked = !Application.Pages["product"].ProductDetail.Liked
    // in server request error case we must revert button checked attribute again
}
