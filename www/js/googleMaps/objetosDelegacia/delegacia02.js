(function(window, mapster) {

	var options = {
		center: {
			lat: -22.893372,
			lng: -43.190819
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.893372, -43.190819);

	
}(window, window.Mapster));