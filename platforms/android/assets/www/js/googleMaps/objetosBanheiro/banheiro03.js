(function(window, mapster) {

	var options = {
		center: {
			lat: -22.85148,
			lng: -43.346698
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.85148, -43.346698);

	
}(window, window.Mapster));