"use strict";
class SimpleIcon extends HTMLElement {
    constructor() {
        super();
        this.iconsURL = "https://simpleicons.org/icons/";
    }
    connectedCallback() {
        let attr = $(this).attr("name");
        if (attr == undefined)
            attr = $(this).attr("title");
        if (attr != undefined) {
            let name = attr.toLowerCase().replace(/\s+/g, "");
            if (!name.includes("."))
                name += ".svg";
            let url = "url(" + this.iconsURL + name + ")";
            $(this).css({
                "-webkit-mask-image": url,
                "mask-image": url
            });
        }
    }
}
window.customElements.define("simple-icon", SimpleIcon);
