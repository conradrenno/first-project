(function(window, mapster) {

	var options = {
		center: {
			lat: -22.92405,
			lng: -43.188865
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.92405, -43.188865);

	
}(window, window.Mapster));