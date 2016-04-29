$(window).resize(function() {
    load();
})

var nowIndex = 0;
var list = ["#home","#info"];

$(window).scroll(function () {

    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

});

function load() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    if (windowWidth / 1.4 < windowHeight) {
        $("#homeBackground").css('background-position', 'center top');
        $("#home").css('height', windowWidth/1.4+"px");
    } else {
        $("#homeBackground").css('background-position', 'center center');
        $("#home").css('height', windowHeight+"px");
    }

    console.log(windowHeight);
    console.log(windowWidth);
}