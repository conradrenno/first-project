(function(window, mapster) {

	var options = {
		center: {
			lat: -22.906878,
			lng: -43.571419
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.906878, -43.571419);

	
}(window, window.Mapster));