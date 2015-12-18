(function(window, mapster) {

	var options = {
		center: {
			lat: -22.98696,
			lng: -43.221073
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.98696, -43.221073);

	
}(window, window.Mapster));