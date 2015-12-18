(function(window, mapster) {

	var options = {
		center: {
			lat: -22.978627,
			lng: -43.413003
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.978627, -43.413003);

	
}(window, window.Mapster));