"use strict";
class SimpleIcon extends HTMLElement {
    constructor() {
        super();
        this.iconsURL = "https://simpleicons.org/icons/";
        $(this).css({
            "display": "block",
            "width": "50px",
            "height": "50px",
            "-webkit-mask-size": "100%",
            "mask-size": "100%"
        });
    }
    connectedCallback() {
        let name = $(this).attr("name");
        if (name != undefined) {
            let url = "url(" + this.iconsURL + name + ")";
            $(this).css({
                "-webkit-mask-image": url,
                "mask-image": url
            });
        }
    }
}
window.customElements.define("simple-icon", SimpleIcon);
