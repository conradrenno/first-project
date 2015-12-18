(function(window, mapster) {

	var options = {
		center: {
			lat: -22.97388,
			lng: -43.387582
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.97388, -43.387582);

	
}(window, window.Mapster));