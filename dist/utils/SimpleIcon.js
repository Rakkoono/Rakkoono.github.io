"use strict";
class SimpleIcon extends HTMLElement {
    constructor() {
        super();
        this.iconsURL = "https://simpleicons.org/icons/";
        this.style.cssText =
            `display: block;
            width: 50px;
            height: 50px;

            -webkit-mask-size: 100%; 
            mask-size: 100%;`;
        if (this.hasAttribute("name")) {
            let url = "url(" + this.iconsURL + this.getAttribute("name") + ")";
            this.style.cssText += "-webkit-mask-image: " + url + "; mask-image: " + url + ";";
        }
    }
}
window.customElements.define("simple-icon", SimpleIcon);
