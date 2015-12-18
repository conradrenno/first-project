(function(window, mapster) {

	var options = {
		center: {
			lat: -22.975467,
			lng: -43.411123
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.975467, -43.411123);

	
}(window, window.Mapster));