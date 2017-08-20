var navItem = $('.nav-list__item');
var page = $('.main-content');
var menuItem = $('.header__list-item');

navItem.on('click', function() {
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





















