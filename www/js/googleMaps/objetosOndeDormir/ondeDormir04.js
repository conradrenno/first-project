(function(window, mapster) {

	var options = {
		center: {
			lat: -22.986486,
			lng: -43.206182
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.986486, -43.206182);

	
}(window, window.Mapster));