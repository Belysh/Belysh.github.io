var leftArrow = $('#left-arrow');
var rightArrow = $('#right-arrow');
var sliderBody = $('.slider-list');
var sliderItemLast = $('.slider-list__item:last-child');
var sliderItemLastIndex = sliderItemLast.index();
var sliderItemFirst = $('.slider-list__item:first-child');
var sliderItemFirstIndex = sliderItemFirst.index();

rightArrow.on('click', function() {
    var sliderItemActive = $('.slider-list__item--active');
    var nextSlide = sliderItemActive.next();
    var nextSlideIndex = nextSlide.index();
    var rightTransform = nextSlideIndex*-100 + '%';
    
    if (nextSlideIndex === -1) {
        sliderBody.animate({
             'left': '0'
        }, 1000, function () {
            sliderItemActive.removeClass('slider-list__item--active');
            sliderItemFirst.addClass('slider-list__item--active')
        });

    } else {
        sliderBody.animate({
            'left': rightTransform
        }, 1000, function () {
            sliderItemActive.removeClass('slider-list__item--active');
            nextSlide.addClass('slider-list__item--active');
        });
    }
});

leftArrow.on('click', function() {
    var sliderItemActive = $('.slider-list__item--active');
    var prevSlide = sliderItemActive.prev();
    var prevSlideIndex = prevSlide.index();
    var rightTransform = prevSlideIndex*-100 + '%';
    
    if (prevSlideIndex === -1) {
        sliderBody.animate({
             'left': '-300%'
        }, 1000, function () {
            sliderItemActive.removeClass('slider-list__item--active');
            sliderItemLast.addClass('slider-list__item--active')
        });

    } else {
        sliderBody.animate({
            'left': rightTransform
        }, 1000, function () {
            sliderItemActive.removeClass('slider-list__item--active');
            prevSlide.addClass('slider-list__item--active');
        });
    }
});








































