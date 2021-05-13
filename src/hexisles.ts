$(updateItchIFrameWidth);
$(window).on("resize", updateItchIFrameWidth);

function updateItchIFrameWidth() {
    let smallSize: number = 208,
        bigSize: number = 552;

    let windowWidth: number = $(window).innerWidth() as number;
    $("#itch-widget").width(windowWidth < bigSize + 50 ? smallSize : bigSize);
}