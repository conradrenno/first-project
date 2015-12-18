(function(window, mapster) {

	var options = {
		center: {
			lat: -23.049644,
			lng: -43.526888
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-23.049644, -43.526888);

	
}(window, window.Mapster));