(function(window, mapster) {

	var options = {
		center: {
			lat: -22.972302,
			lng: -43.217597
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.972302, -43.217597);

	
}(window, window.Mapster));