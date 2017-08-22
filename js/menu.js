var button = $('.header__nav-button');
var menuBlock = $('.pop-up-menu');
var main = $('.main');
var closeButton = $('.x-button');

$(window).resize(function(){
    if (main.css('min-height') === '800px') {
        menuBlock.css({
            'top': '-800px'
        });
    } else {
        menuBlock.css({
            'top': '-100%'
        });
    }
});

button.on('click', function () {
    menuBlock.animate({
        'top': '0px'
    }, 500);
});

closeButton.on('click', function () {
    if (main.css('min-height') === '800px') {
        menuBlock.animate({
            'top': '-800px'
        }, 500);
    } else {
        menuBlock.animate({
            'top': '-100%'
        }, 500);
    }
});

















