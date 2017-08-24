var popupClose = $('.comments__close-button');
var popupComments = $('.comments__pop-up');
var popupButton = $('.comment-button');

popupButton.on('click', function() {
    var object = $(this);
    var headlineText = $(this).parent().find('.comment-headline').text();
    var headlineTextString = String(headlineText);
    var textText = $(this).parent().find('.comment-text').text();
    var textTextString = String(textText);
    var popupHeadline = popupComments.find('.comments__pop-up-headline');
    var popupText = popupComments.find('.comments__pop-up-text');
    
    popupHeadline.text(headlineTextString);
    popupText.text(textTextString);
    popupComments.css({
        'visibility': 'visible'
    });
    popupComments.animate({
        'opacity': '0.92'
    }, 1000);
});

popupClose.on('click', function() {
    popupComments.animate({
        'opacity': '0'
    }, 1000, function() {
        popupComments.css({
            'visibility': 'hidden'
        });
    });
});






























