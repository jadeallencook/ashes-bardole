
var gmap;
gmap = new GMaps({
   el: '#map',
   lat: 42.360857,
   lng: -71.059076,
   zoom: 15, 
   zoomControl: false,
   scaleControl: false,
   scrollwheel: false,
   disableDoubleClickZoom: true,
   background: '#FF0000',
   styles: [ { "stylers": [ { "hue": "#ffffff" }, {saturation: -100}, {gamma: .5} ] } ]
});
gmap.addMarker({
   lat: 42.360857,
   lng: -71.059076,
   title: 'Marker with InfoWindow',
   infoWindow: {
	content: '<p>HTML Content</p>'
   }
});

