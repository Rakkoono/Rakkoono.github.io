"use strict";
let loadsLeft = 0;
$(function () {
    // insert header and footer
    load("/assets/html/header.html", true);
    load("/assets/html/footer.html", false);
});
function load(url, prepend = false) {
    loadsLeft++;
    $("<div>").load(url, function () {
        if (prepend)
            $(this).contents().prependTo("body");
        else
            $(this).contents().appendTo("body");
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
    let minMargin = parseInt($("#content").css("--min-margin"));
    $("#content").css("margin-top", $("#header").outerHeight() + minMargin + "px");
    // Calculate width 
    let vw = $(window).innerWidth() / 100, percent = $("#content").parent().innerWidth() / 100;
    let maxWidth = 100 * percent - 2 * minMargin;
    $("#content").css({
        "min-width": maxWidth - 2.5 * percent * vw,
        "max-width": maxWidth
    });
}
