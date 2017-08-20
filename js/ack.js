var item = $('.menu-list__item');


item.on('click', function () {
    var object = $(this);
    var itemActive = $('.menu-list__item--active');
    var scrollWidth = $(window).width() - 240;
    var scrollWidthPhones = $(window).width() - 81;
    
    $.when(itemActive.find('.menu-list__text').stop(true).animate({
        'opacity': '0'
    }, 300)).then( function () {
        itemActive.find('.menu-list__info').stop(true).animate({
            'width': '0px'
     }, 1000)});
    itemActive.removeClass('menu-list__item--active');
    
    if ($(window).width() > 992) {
        if (object.find('.menu-list__info').css('width') === '0px' ) {
            $.when(object.find('.menu-list__info').stop(true).animate({
                'width': '620px'
            }, 1000)).then( function () {
            object.find('.menu-list__text').stop(true).animate({
                'opacity': '1'
            }, 300)});
            object.addClass('menu-list__item--active');
        }
    }
    
    if ($(window).width() <= 992 && $(window).width() > 480) {
        if (object.find('.menu-list__info').css('width') === '0px' ) {
            $.when(object.find('.menu-list__info').stop(true).animate({
                'width': scrollWidth
            }, 1000)).then( function () {
            object.find('.menu-list__text').stop(true).animate({
                'opacity': '1'
            }, 300)});
            object.addClass('menu-list__item--active');
        }
    }
    
    if ($(window).width() < 480) {
        var index = object.index();
        var indexOneScroll = $(window).width() - 240;
        var indexTwoScroll = $(window).width() - 160;
        var indexThreeScroll = $(window).width() - 80;
        
        if (index === 0) {
            object.css({
                'position': 'absolute',
                'bottom': '0',
                'right': '160px'
            })
        }
        if (index === 1) {
            object.css({
                'position': 'absolute',
                'bottom': '0',
                'right': '80px'
            })
        }
        if (index === 2) {
            object.css({
                'position': 'absolute',
                'bottom': '0',
                'right': '0'
            })
        }
        
        if (object.find('.menu-list__info').css('width') === '0px' ) {
            $.when(object.animate({
                'left': '0',
                'bottom': '0',
                'z-index': '10',
                'width': '100vw'           
            }, 1000)).then( function () {
                object.find('.menu-list__info').stop(true).animate({
                    'width': scrollWidthPhones
            }, 1000, function () {
                object.find('.menu-list__text').stop(true).animate({
                    'opacity': '1'
            }, 300)})});
        } else {
            $.when(object.find('.menu-list__text').stop(true).animate({
                'opacity': '0'
            }, 300)).then( function () {
                object.find('.menu-list__info').stop(true).animate({
                    'width': '0px'
            }, 1000, function () {
                if (index === 0) {
                    object.stop(true).animate({
                        'left': indexOneScroll,
                        'width': '80px',
                        'z-index': '1'
                    }, 1000, function() {
                    object.stop(true).css({
                        'position': 'static'
                    })
                    })
                }
                if (index === 1) {
                    object.stop(true).animate({
                        'left': indexTwoScroll,
                        'width': '80px',
                        'z-index': '1'
                    }, 1000, function() {
                    object.stop(true).css({
                        'position': 'static'
                    })
                    })
                }
                if (index === 2) {
                    object.stop(true).animate({
                        'left': indexThreeScroll,
                        'width': '80px',
                        'z-index': '1'
                    }, 1000, function() {
                    object.stop(true).css({
                        'position': 'static'
                    })
                    })
                }
            })});
        }
    }
});











/*object.stop(true).animate({
                    'left': scrollWidth,
                    'width': '80px',
                    'z-index': '1'
            }, 1000)*/





/*item.on('click', function () {
    var object = $(this);
    var itemActive = $('.menu-list__item--active');
    
    $.when(itemActive.find('.menu-list__text').stop(true).animate({
        'opacity': '0'
    }, 300)).then( function () {
        itemActive.find('.menu-list__info').stop(true).animate({
            'width': '0px'
     }, 1000)});
    itemActive.removeClass('menu-list__item--active');
    
    if (screen.width > 768) {
        if (object.find('.menu-list__info').css('width') === '0px' ) {
            $.when(object.find('.menu-list__info').stop(true).animate({
                'width': '620px'
            }, 1000)).then( function () {
            object.find('.menu-list__text').stop(true).animate({
                'opacity': '1'
            }, 300)});
            object.addClass('menu-list__item--active');
        }
    }
});













/*var item = $('.menu-list__item');

item.on('click', function () {
    var itemActive = $('.menu-list__item--active');
    itemActive.find('.menu-list__info').stop(true).animate({
            'width': '0px'
        }, 1000);
    if ($(this).find('.menu-list__info').css('width') === '0px') {
        $(this).find('.menu-list__info').stop(true).animate({
            'width': '620px'
        }, 1000);
        $(this).addClass('menu-list__item--active');
    } else {
        $(this).find('.menu-list__info').stop(true).animate({
            'width': '0px'
        }, 1000);
    }
});


/*var item = $('.menu-list__item');
item.on('click', function () {
    if (item.hasClass('menu-list__item--active')) {
        item.not($(this)).removeClass('menu-list__item--active');
    }
    $(this).toggleClass('menu-list__item--active');
});*/

