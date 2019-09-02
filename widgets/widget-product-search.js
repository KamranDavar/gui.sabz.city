/* For license and copyright information please see LEGAL file in repository */

import { html, css, LitElement, unsafeCSS } from '../lit-element/lit-element.js'

Application.Widgets["product-search"] = {
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    }
}

export class WidgetProductSearch extends LitElement {
    // constructor() {
    //     super()
    // }
    static get properties() {
        return {
            searchDialogOpen: Boolean, // default is false
        }
    }
    static get styles() {
        return css`
            @import '${unsafeCSS(Application.DesignLanguageStyles.href)}';
            
            dialog {
                position: absolute;
                width: auto;
                top: 64px;
            }
            dialog > div {
                display: inline-flex;
            }
        `
    }
    render() {
        return html`
            <button type="button" class="icon" @click=${this.toggleSearchDialog} aria-haspopup="true" aria-controls="searchDialog"
                .aria-expanded=${this.searchDialogOpen} accesskey="s">
                <i class="icons-font">search</i>
            </button>
            
            <div class="disabledBackground" @click=${this.toggleSearchDialog} ?hidden=${!this.searchDialogOpen}></div>
            <!-- Query to categorized products can be : Name, OrgID, Tag, Brand, Distribution Centers, Price, Off,  -->
            <dialog type="modal" id="searchDialog" ?open=${this.searchDialogOpen}>
                <header>
                    <input type="search" id="textSearch" list="suggested" />
                    <label for="search">Search by text or picture</label>
                    <label for="camera">
                        <i class="icons-font">camera</i>
                    </label>
                    <input type="file" id="camera" accept="image/*;capture=camera" hidden />
                    <datalist id="suggested">
                        <option></option>
                    </datalist>
                </header>
            
                <div>
                    <section>
                        <h3>TAGS</h3>
                        <div>
                            <input type="text" id="tags" list="relatedTags">
                            <label for="tags">Filter by Tags</label>
                            <datalist id="relatedTags">
                                <option>related tags to active tag</option>
                            </datalist>
                        </div>
                    </section>
            
                    <section>
                        <h3>Warehouse</h3>
                        <div>
                            <input type="range" id="warehouseDistance">
                            <label for="warehouseDistance">Filter product in near||far warehouse</label>
                        </div>
                    </section>
            
                    <!-- Filter and show all users last orders product ?? -->
            
                    <section>
                        <h3>Sort</h3>
                        <div>
                            <select id="sort">
                                <option selected></option>
                                <option value=1>Best Selling</option>
                                <option value=2>Most popular</option>
                                <option value=3>Most visited</option>
                                <option value=4>Newest</option>
                                <option value=5>Cheap</option>
                                <option value=6>Expensive</option>
                                <option value=7>Most discount</option>
                            </select>
                        </div>
                    </section>
            
                    <section>
                        <h3>Price</h3>
                        <div>
                            <input type="range" id="priceRange">
                            <label for="priceRange">Filter by price</label>
                        </div>
                    </section>
            
                    <section>
                        <h3>Brand</h3>
                        <div>
                            <input type="text" id="brandName">
                            <label for="brandName">Filter by brand||org name</label>
                        </div>
                    </section>
                </div>
            
                <footer>
                    <button id="applyFilter" class="icon" title="Apply filters" @click=${this.applyFilter}>
                        <i class="icons-font">check</i>
                    </button>
                    <button id="clearFilter" class="icon" title="Clear filters" @click=${this.clearFilter}>
                        <i class="icons-font">clear</i>
                    </button>
                </footer>
            </dialog>
        `
    }
    toggleSearchDialog() {
        this.searchDialogOpen = !this.searchDialogOpen
        // Input must get focus on physical keyboard || not have small screen!
        if (this.searchDialogOpen && window.navigator.maxTouchPoints === 0) this.shadowRoot.getElementById("textSearch").focus()
    }
    applyFilter() {
        this.toggleSearchDialog()

        let url = '/store?'
        const q = this.shadowRoot.getElementById("textSearch").value
        if (q) url = url + 'q=' + q + '&'
        const tags = this.shadowRoot.getElementById("tags").value
        if (tags) url = url + 'tags=' + tags + '&'
        const sort = this.shadowRoot.getElementById("sort").value
        if (sort) url = url + 'sort=' + sort + '&'

        if (q || tags || sort) {
            history.pushState(history.state, "", url)
            window.dispatchEvent(new Event('pushState'))
        }
    }
    clearFilter() {
        this.toggleSearchDialog()
        this.shadowRoot.getElementById("textSearch").value = ""
        history.pushState(history.state, "", '/store')
        window.dispatchEvent(new Event('pushState'))
    }
}
customElements.define('widget-product-search', WidgetProductSearch)
