var leftArrow = $('#left-arrow');
var rightArrow = $('#right-arrow');
var sliderBody = $('.slider-list');
var itemsAmount = sliderBody.children().length;
var slideActiveNumber = 1;

rightArrow.on('click', function () {
    var slideTransform = slideActiveNumber * -100 + '%';
    if (slideActiveNumber === itemsAmount) {
        sliderBody.stop(true).animate({
            'left': 0
        }, 1000, function () {
            slideActiveNumber = 1;
        });
    } else {
        sliderBody.stop(true).animate({
            'left': slideTransform
        }, 1000, function () {
            slideActiveNumber++;
        })
    }
});

leftArrow.on('click', function () {
    var slideTransform = (slideActiveNumber - 2) * -100 + '%';
    var maxTransform = (itemsAmount - 1) * -100 + '%';
    if (slideActiveNumber === 1) {
        sliderBody.stop(true).animate({
            'left': maxTransform
        }, 1000, function () {
            slideActiveNumber = itemsAmount;
        })
    } else {
        sliderBody.stop(true).animate({
            'left': slideTransform
        }, 1000, function () {
            slideActiveNumber--;
        })
    }
});
