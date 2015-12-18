(function(window, mapster) {

	var options = {
		center: {
			lat: -22.853939,
			lng: -43.351483
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.853939, -43.351483);

	
}(window, window.Mapster));