var listItem = $('.members-list__item')
var listName = $('.members-list__member-name')
var list = $('.members-list');

listName.on('click', function() {
    var object = $(this);
    var listInfo = object.siblings('.members-list__member-info');
    var objectItem = object.parent();
    var itemActive = list.find('.members-list__item--active');
        
    if (itemActive.length === 0) {
        listInfo.css({
            'height': 'auto'
        });
         listInfo.stop(true).animate({
             'opacity': '1'
         }, 1000);
        objectItem.addClass('members-list__item--active');
    }
    if (itemActive.length === 1) {
        if (objectItem.index() !== itemActive.index()) {
            itemActive.find('.members-list__member-info').stop(true).animate({
                'opacity': '0'
            }, 1000, function() {
                itemActive.find('.members-list__member-info').css({
                    'height': '0'
                });
                itemActive.removeClass('members-list__item--active');
                
                listInfo.css({
                    'height': 'auto'
                });
                 listInfo.stop(true).animate({
                     'opacity': '1'
                 }, 1000);
                objectItem.addClass('members-list__item--active');
            });
        }
        if (objectItem.hasClass('members-list__item--active')) {
            listInfo.stop(true).animate({
                'opacity': '0'
            }, 500, function () {
                listInfo.css({
                    'height': '0'
                });
            });
            objectItem.removeClass('members-list__item--active');
        }
    }
})























