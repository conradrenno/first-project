(function(window, mapster) {

	var options = {
		center: {
			lat: -22.985024,
			lng: -43.198886
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.985024, -43.198886);

	
}(window, window.Mapster));