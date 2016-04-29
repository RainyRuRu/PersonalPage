$(window).resize(function() {
    load();
})

$(window).scroll(function () {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var scrollTop = $(window).scrollTop();
    var homeButton = $("#homeButton");

    if (windowWidth < homeButton.width() * 2) {
        homeButton.show();
        return;
    }

    if (scrollTop > windowHeight * 0.8) {
        homeButton.hide();
    } else {
        homeButton.show();
    }
});

function scrollToPage(type) {
    var marginTopStr = $(type).css("margin-top");
    var marginTop = marginTopStr.substring(0, marginTopStr.length-2);

    $('html, body').animate({
        scrollTop: $(type).offset().top - marginTop
    }, 2000);
}

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
}

var experienceList = {
    "test": ["kkk", "kkbox"],
    "test2": ["value2"]
};


function type(info) {
    $("#experienceText").typed('reset');
    $("#experienceText").typed({
        strings: experienceList[info],
        contentType: 'html',
        typeSpeed: 2
     });
}