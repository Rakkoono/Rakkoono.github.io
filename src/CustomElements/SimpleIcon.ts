class SimpleIcon extends HTMLElement {
    iconsURL: string = "https://simpleicons.org/icons/";
    constructor() {
        super();
    }

    connectedCallback(): void {
        let attr: string | undefined = $(this).attr("name");
        if (attr == undefined)
            attr = $(this).attr("title");

        if (attr != undefined)
        {
            let name: string = attr.toLowerCase().replace(/\s+/g, "");
            if (!name.includes("."))
                name += ".svg";

            let url: string = "url(" + this.iconsURL + name + ")";
            $(this).css({
                "-webkit-mask-image": url,
                "mask-image": url
            });
        }
    }
}

window.customElements.define("simple-icon", SimpleIcon);