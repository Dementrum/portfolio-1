export let map = (function(){
  let init = function(){
    
    let mapCenter = {
      lat: 53.847750, 
      lng: 27.629020,
    };

    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: mapCenter,
      scrollwheel: false,
      styles: [
        {
          'featureType': 'administrative',
          'elementType': 'labels.text.fill',
          'stylers': [{'color': '#444444'}],
        },
        {
          'featureType': 'administrative.country',
          'elementType': 'geometry.fill',
          'stylers': [{'visibility': 'off'}],
        },
        {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [{'color': '#f2f2f2'}],
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [{'visibility': 'off'}],
        },
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [{'saturation': -100},{'lightness': 45}],
        },
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [{'visibility': 'simplified'}],
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'labels.icon',
          'stylers': [{'visibility': 'off'}],
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [{'visibility': 'off'}],
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [{'color': '#1de9b6'},{'visibility': 'on'}],
        },
      ],
    });

    let logo = {
      url: './../img/content/map_marker.svg',
      size: new google.maps.Size(30, 45),
      scaledSize: new google.maps.Size(30, 45),
    };

    let infowindow = new google.maps.InfoWindow();

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(53.844804, 27.633298),
      icon: logo,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'ул. Ташкентская, 22/2',
    });

    marker.addListener('click', function(){
      infowindow.setContent('ул. Ташкентская, 22/2');
      infowindow.open(map, marker);
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() {
        marker.setAnimation(null);
      }, 2100);
    });
  };

  return{
    init: init,
  };
})();