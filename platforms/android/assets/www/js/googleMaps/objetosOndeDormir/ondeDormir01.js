(function(window, mapster) {

	var options = {
		center: {
			lat: -22.970248,
			lng: -43.184102
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.970248, -43.184102);

	
}(window, window.Mapster));