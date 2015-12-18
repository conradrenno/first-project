(function(window, mapster) {

	var options = {
		center: {
			lat: -22.903152,
			lng: -43.294641
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.903152, -43.294641);

	
}(window, window.Mapster));