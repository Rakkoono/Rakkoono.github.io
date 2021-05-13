let loadsLeft: number = 0;

$(function () {
    // insert header and footer
    load("/assets/html/header.html", true);
    load("/assets/html/footer.html", false);
});

function load(url: string, prepend: boolean = false) {
    loadsLeft++;
    $("<div>").load(url, function () {
        if (prepend) $(this).contents().prependTo("body");
        else $(this).contents().appendTo("body");
        afterLoad();
    });
}

function afterLoad() {
    if (--loadsLeft == 0)
        updateContentSize();
}

$(window).on("resize", updateContentSize);

function updateContentSize() {

    // Apply header width to top margin
    let minMargin: number = parseInt($("#content").css("--min-margin"));
    $("#content").css("margin-top", $("#header").outerHeight() as number + minMargin + "px");

    // Calculate width 
    let vw: number = $(window).innerWidth() as number / 100,
        percent: number = $("#content").parent().innerWidth() as number / 100;
    let maxWidth: number = 100 * percent - 2 * minMargin;
    $("#content").css({
        "min-width": maxWidth - 2.5 * percent * vw,
        "max-width": maxWidth
    });
}