"use strict";
$(updateItchIFrameWidth);
$(window).on("resize", updateItchIFrameWidth);
function updateItchIFrameWidth() {
    let smallSize = 208, bigSize = 552;
    let windowWidth = $(window).innerWidth();
    $("#itch-widget").width(windowWidth < bigSize + 50 ? smallSize : bigSize);
}
