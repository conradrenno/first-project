(function(window, mapster) {

	var options = {
		center: {
			lat: -22.975266,
			lng: -43.227725
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.975266, -43.227725);

	
}(window, window.Mapster));