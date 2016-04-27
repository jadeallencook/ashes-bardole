
var gmap;
gmap = new GMaps({
   el: '#map',
   lat: 40.7765868,
   lng: -111.9905243,
   zoom: 10, 
   zoomControl: true,
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

