var navItem = $('.nav-list__item');
var page = $('.main-content');
var menuItem = $('.list-item-scroll');
var popupItem = $('.pop-up__item--sroll');
var orderLink = $('.order-link--scroll');

navItem.on('click', function () {
    var object = $(this);
    var navItemActive = $('.nav-list__item--active');
    var currentPage = navItemActive.index();
    var newPage = object.index();
    var currentTransform = currentPage * 100;
    var rightTransform = (newPage - currentPage)* 100;
    var transformSize = (currentTransform + rightTransform)*-1 + '%';
    navItemActive.removeClass('nav-list__item--active');
    object.addClass('nav-list__item--active');
    page.css({
        'transform': 'translateY(' + transformSize + ')'
    })
});

menuItem.on('click', function() {
    var object = $(this);
    var navItemActive = $('.nav-list__item--active');
    var currentPage = navItemActive.index();
    var newPage = object.index() + 1;
    var currentTransform = currentPage * 100;
    var rightTransform = (newPage - currentPage)* 100;
    var transformSize = (currentTransform + rightTransform)*-1 + '%';
    var currentnavItem = $('.nav-list__item')[newPage];
    navItemActive.removeClass('nav-list__item--active');
    currentnavItem.classList.add('nav-list__item--active');
    
    page.css({
        'transform': 'translateY(' + transformSize + ')'
    })
});

popupItem.on('click', function() {
    if ($(window).width() <= 480) {
        var object = $(this);
        var objectIndex = object.index();
        var transform = (objectIndex +1)* 800;
        
        window.scrollBy(0,transform)
    } 
    if($(window).width() > 480 && $(window).width() <= 768) {
        if ($(window).height() <= 650) {
            var object = $(this);
            var objectIndex = object.index();
            var transform = (objectIndex +1)* 650;
        
            window.scrollBy(0,transform)
        } else {
            var object = $(this);
            var objectIndex = object.index();
            var windowHeight = $(window).height();
            var transform = (objectIndex +1)* windowHeight;
        
            window.scrollBy(0,transform)
        }
    }
})

orderLink.on('click', function() {
    if ($(window).width() > 780) {
        var navItemActive = $('.nav-list__item--active');
        navItemActive.removeClass('nav-list__item--active');
        var newActive = $('.nav-list__item:nth-child(7)');
        newActive.addClass('nav-list__item--active');
        
        page.css({
            'transform': 'translateY(-600%)'
        })
    } 
    if ($(window).width() <= 780 && $(window).width() > 480) {
        if ($(window).height() <= 650) {
            var transform = 6 * 650;
        
            window.scrollTo(0,transform)
        } else {
            var windowHeight = $(window).height();
            var transform = 6 * windowHeight;
        
            window.scrollTo(0,transform)
        }
    }
    if ($(window).width() <= 480) {
        var transform = 6 * 800;
        
        window.scrollTo(0,transform)
    } 
});



var totalWheel = 0;

window.onwheel = function(e){
    var delta = e.deltaY;
    totalWheel += delta;
    if ($(window).width() >= 768) {
        if (totalWheel > 400) {
            totalWheel = 0;
        }

        if (totalWheel < -400) {
            totalWheel = 0;
        }

        if (totalWheel === 400) {
            if ($('.nav-list__item--active').next().length !== 0){
                var object = $('.nav-list__item--active').next();
                var navItemActive = $('.nav-list__item--active');
                var currentPage = navItemActive.index();
                var newPage = object.index();
                var currentTransform = currentPage * 100;
                var rightTransform = (newPage - currentPage)* 100;
                var transformSize = (currentTransform + rightTransform)*-1 + '%';
                navItemActive.removeClass('nav-list__item--active');
                object.addClass('nav-list__item--active');
                page.css({
                    'transform': 'translateY(' + transformSize + ')'
                })
                totalWheel = 0;
            }
        }

        if (totalWheel === -400) {
            if ($('.nav-list__item--active').prev().length !== 0) {
                var object = $('.nav-list__item--active').prev();
                var navItemActive = $('.nav-list__item--active');
                var currentPage = navItemActive.index();
                var newPage = object.index();
                var currentTransform = currentPage * 100;
                var rightTransform = (newPage - currentPage)* 100;
                var transformSize = (currentTransform + rightTransform)*-1 + '%';
                navItemActive.removeClass('nav-list__item--active');
                object.addClass('nav-list__item--active');
                page.css({
                    'transform': 'translateY(' + transformSize + ')'
                })
                totalWheel = 0;
            }
        }
    }
}
















