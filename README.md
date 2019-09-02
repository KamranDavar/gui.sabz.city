# GUI (Graphical User Interface) app for SabzCity platform
We use some written GUI engine to compile GUI app to native devices OS and web! GUI engines just support HTML5 standard, So we develop this gui app by HTML5 architecture standards like progressive web app (PWA) with so improvement.

## Design Methodology
We use AtomicDesign! So web app split in many way. Largest split is about services such as accounting, blog, cloud, landings, life, my, org, services, store, transport, widget , ... .
- https://developers.google.com/web/fundamentals/design-and-ux/responsive/

## Localize
### URL
We use hl(hreflang) query in url like others e.g. google, instagram, ...!   
- https://www.google.com/search?hl=en&q=sabz.city
- https://www.instagram.com/sabz.city/?hl=en

- [ISO 639](https://www.iso.org/iso-639-language-codes.html) for language
- [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) for region code
### Title page
Indicate info name in all window.Application.Pages.

## URL standard
We use page name (service name) for indicate in URL. e.g   
` {domain}/{page-name}/{resource-uuid}?hl=en&{}={} `   
e.g.   
` www.sabz.city/product/123456789?name=product_name&hl=en `

## Reference to code better!
- https://html.spec.whatwg.org/multipage/

## Some dependencies download location:
- https://unpkg.com/lit-element@latest/
- https://unpkg.com/lit-html@latest/
- https://unpkg.com/material-components-web@latest/
- https://github.com/templarian/materialdesign-svg

## Some VSC extensions to code easily
- [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)
- [Template Literal Editor](https://marketplace.visualstudio.com/items?itemName=plievone.vscode-template-literal-editor)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Serve manually
### Chrome
We suggest use web servers extensions
- https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-app-launcher-info-dialog

### Apache
- open `httpd.conf` and add `main.html` to `DirectoryIndex` line
- 
