var mapGoogle = (function() {
  var init = function() {
    var uluru = { lat: 48.464496, lng: 35.047514 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru,
      scrollwheel: false
    });
    var icons = {
      position: {
        icon: {
          url: '../img/map/map-marker.svg',
          size: new google.maps.Size(40, 50),
          scaledSize: new google.maps.Size(40, 50)
        }
      },
    }

    var features = [
      {
        position: new google.maps.LatLng(48.466725, 35.051249),
        type: 'position',
        contentString: 'вул. Глінки, 2',
        content: 'вулиця Глінки, 2'
      },
      {
        position: new google.maps.LatLng(48.465506, 35.043227),
        type: 'position',
        contentString: 'вул. Короленка, 2',
        content: 'вулиця Короленка, 2'
      },
      {
        position: new google.maps.LatLng(48.463667, 35.054069),
        type: 'position',
        contentString: 'вул. Шолом-Алейхема, 4/26',
        content: 'вулиця Шолом-Алейхема, 4/26'
      }
    ];

    var infowindow = new google.maps.InfoWindow();

    features.forEach(function(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map,
        title: feature.contentString,
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', function(){
        infowindow.setContent(feature.content);
        infowindow.open(map, marker);
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 1400);
      });
    });

  }

  return {
    init: init
  }
})();