var accordionList = $('.menu-list');
var accordionItem = $('.menu-list__item');
var accordionItemsActive = 0;

accordionItem.on('click', function () {
    var object = $(this);
    var menuListInfo = object.find('.menu-list__info');
    var menuListText = object.find('.menu-list__text');
    var accordionItemActive = accordionList.find('.menu-list__item--active');
    var menuListInfoActive = accordionItemActive.find('.menu-list__info');
    var menuListTextActive = accordionItemActive.find('.menu-list__text');
    var maxSize = $(window).width() -240;
    var scrollWidthPhones = $(window).width() - 81;
    
    if ($(window).width() > 992) {
        if (accordionItemsActive === 0) {
            accordionItemsActive++;
            if (menuListInfo.width() === 0) {
                menuListInfo.stop(true).animate({
                    'width': '620px'
                }, 1000, function () {
                    menuListText.stop(true).animate({
                        'opacity': '1'
                    }, 500)
                    object.addClass('menu-list__item--active')
                });
            }
        }
        if (accordionItemsActive === 1) {
            if (object.index() !== accordionItemActive.index()) {
                menuListTextActive.stop(true).animate({
                    'opacity': '0'
                }, 500, function() {
                    menuListInfoActive.stop(true).animate({
                            'width': '0'
                        }, 1000, function () {
                            menuListInfo.stop(true).animate({
                        'width': '620px'
                    }, 1000, function () {
                            menuListText.stop(true).animate({
                                'opacity': '1'
                            }, 500)
                            object.addClass('menu-list__item--active')
                            accordionItemsActive++;
                        });
                    });
                    accordionItemActive.removeClass('menu-list__item--active');
                    accordionItemsActive--;
                });
            }
            if (object.hasClass('menu-list__item--active')) {
                menuListText.animate({
                    'opacity': '0'
                }, 500, function() {
                    menuListInfo.animate({
                        'width': '0'
                    }, 1000);
                    object.removeClass('menu-list__item--active');
                    accordionItemsActive--;
                });
            }
        }
        if (accordionItemsActive > 1) {
            object.removeClass('menu-list__item--active');
            accordionItemsActive = 1;
            menuListInfo.css({
                'width': '0'
            });
        }
    }
    
    if ($(window).width() <= 992 && $(window).width() > 480) {
        if (accordionItemsActive === 0) {
            if (menuListInfo.width() === 0) {
                menuListInfo.stop(true).animate({
                    'width': maxSize
                }, 1000, function () {
                    menuListText.stop(true).animate({
                        'opacity': '1'
                    }, 500)
                    object.addClass('menu-list__item--active')
                });
                accordionItemsActive++;
            }
        }
        if (accordionItemsActive === 1) {
            if (object.index() !== accordionItemActive.index()) {
                menuListTextActive.stop(true).animate({
                    'opacity': '0'
                }, 500, function() {
                    menuListInfoActive.stop(true).animate({
                            'width': '0'
                        }, 1000, function () {
                            menuListInfo.stop(true).animate({
                        'width': maxSize
                    }, 1000, function () {
                            menuListText.stop(true).animate({
                                'opacity': '1'
                            }, 500)
                            object.addClass('menu-list__item--active')
                            accordionItemsActive++;
                        });
                    });
                    accordionItemActive.removeClass('menu-list__item--active');
                    accordionItemsActive--;
                });
            }
            if (object.hasClass('menu-list__item--active')) {
                menuListText.animate({
                    'opacity': '0'
                }, 500, function() {
                    menuListInfo.animate({
                        'width': '0'
                    }, 1000);
                    object.removeClass('menu-list__item--active');
                    accordionItemsActive--;
                });
            }
        }
        if (accordionItemsActive > 1) {
            menuListInfo.css({
                'width': '0'
            });
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
            }, 500)).then( function () {
                object.find('.menu-list__info').stop(true).animate({
                    'width': scrollWidthPhones
            }, 500, function () {
                object.find('.menu-list__text').stop(true).animate({
                    'opacity': '1'
            }, 300)})});
        } else {
            $.when(object.find('.menu-list__text').stop(true).animate({
                'opacity': '0'
            }, 300)).then( function () {
                object.find('.menu-list__info').stop(true).animate({
                    'width': '0px'
            }, 500, function () {
                if (index === 0) {
                    object.stop(true).animate({
                        'left': indexOneScroll,
                        'width': '80px',
                        'z-index': '1'
                    }, 500, function() {
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
                    }, 500, function() {
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
                    }, 500, function() {
                    object.stop(true).css({
                        'position': 'static'
                    })
                    })
                }
            })});
        }
    }
});