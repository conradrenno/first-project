(function(window, mapster) {

	var options = {
		center: {
			lat: -22.965585,
			lng: -43.177943
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.965585, -43.177943);

	
}(window, window.Mapster));