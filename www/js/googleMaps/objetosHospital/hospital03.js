(function(window, mapster) {

	var options = {
		center: {
			lat: -22.857217,
			lng: -43.250116
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.857217, -43.250116);

	
}(window, window.Mapster));