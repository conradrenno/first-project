(function(window, mapster) {

	var options = {
		center: {
			lat: -22.98399,
			lng: -43.208888
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.98399, -43.208888);

	
}(window, window.Mapster));