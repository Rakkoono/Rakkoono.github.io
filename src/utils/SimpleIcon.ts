class SimpleIcon extends HTMLElement {
    iconsURL: string = "https://simpleicons.org/icons/";
    constructor() {
        super();

        $(this).css({
            "display": "block",
            "width": "50px",
            "height": "50px",
            "-webkit-mask-size": "100%",
            "mask-size": "100%"
        });
    }

    connectedCallback(): void {
        let name: string | undefined = $(this).attr("name");
        if (name != undefined)
        {
            let url: string = "url(" + this.iconsURL + name + ")";
            $(this).css({
                "-webkit-mask-image": url,
                "mask-image": url
            });
        }
    }
}

window.customElements.define("simple-icon", SimpleIcon);