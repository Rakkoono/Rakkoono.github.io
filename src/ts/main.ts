$(function () {

    // Keep Age Updated
    let birthday: number = new Date(2005, 11, 29).getTime();
    let current: number = new Date().getTime();
    let age: number = Math.floor((current - birthday) / (24 * 3600 * 1000) / 365.25);
    $(".age").text(age.toString());
});