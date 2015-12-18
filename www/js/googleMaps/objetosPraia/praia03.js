(function(window, mapster) {

	var options = {
		center: {
			lat: -23.070888,
			lng: -43.569031
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-23.070888, -43.569031);

	
}(window, window.Mapster));