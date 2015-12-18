(function(window, mapster) {

	var options = {
		center: {
			lat: -23.013862,
			lng: -43.377457
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-23.013862, -43.377457);

	
}(window, window.Mapster));