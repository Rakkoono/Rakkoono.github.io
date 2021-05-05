class SimpleIcon extends HTMLElement {
    iconsURL: string = "https://simpleicons.org/icons/";
    constructor() {
        super();

        this.style.cssText = 
           `display: block;
            width: 50px;
            height: 50px;

            -webkit-mask-size: 100%; 
            mask-size: 100%;`;
        
        if (this.hasAttribute("name"))
        {
            let url: string = "url(" + this.iconsURL + this.getAttribute("name") + ")";
            this.style.cssText += "-webkit-mask-image: " + url + "; mask-image: " + url + ";";
        }
    }
}

window.customElements.define("simple-icon", SimpleIcon);