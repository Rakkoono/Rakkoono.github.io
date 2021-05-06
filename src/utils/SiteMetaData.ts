class SiteMetaData extends HTMLElement {

    constructor() {
        super();

        $("head").append(
           `<!--*META TAGS INSERTED FROM <SITE-META-DATA>*-->

            <!--Default tags:-->
            <meta name="twitter:card" content="summary">
            <meta property="og:type" content="website">
            <meta property="og:url" content="${this.ownerDocument.URL}">`
        );
    }

    connectedCallback(): void {
        if (this.attributes.length != 0)
            $("head").append(`<!--Specified tags:-->`)

        for (let i = 0; i < this.attributes.length; i++) {
            const attr: Attr = this.attributes[i];
            if (attr.name == "title") {
                $("head").append($(`<title>${attr.value}</title>`));
            }
            else if (attr.name == "description") {
                $("head").append($(`<meta name="description" content="${attr.value}">`));
            }
            else if (attr.name == "keywords") {
                $("head").append($(`<meta name="keywords" content="${attr.value}">`));
                continue;
            }
            else if (attr.name == "author") {
                $("head").append($(`<meta name="author" content="${attr.value}">`));
                continue;
            }
            else if (attr.name == "creator" || attr.name == "site" || attr.name == "card") {
                $("head").append($(`<meta name="twitter:${attr.name}" content="${attr.value}">`));
                continue;
            }

            $("head").append($(`<meta property="og:${attr.name}" content="${attr.value}">`));
        }

        $(this).remove();
    }
}

window.customElements.define("site-meta-data", SiteMetaData);
/*
<site-meta-data
    site_name=""
    title=""
    description=""
    keywords=""
    author=""
    creator="">
</site-meta-data>
*/