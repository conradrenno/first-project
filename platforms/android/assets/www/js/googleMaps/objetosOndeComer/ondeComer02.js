(function(window, mapster) {

	var options = {
		center: {
			lat: -22.983207,
			lng: -43.202791
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.983207, -43.202791);

	
}(window, window.Mapster));