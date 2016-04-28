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

    
    if ((windowWidth < 950) || (windowWidth*1.3 < windowHeight)) {
        $("#homeBackground").css('background-position', 'center top');
        $("#homeBackground").css('height', "100%");
    } else {
        $("#homeBackground").css('background-position', 'center center');
        $("#homeBackground").css('height', windowHeight+"px");
    }

    console.log(windowHeight);
    console.log(windowWidth);
}