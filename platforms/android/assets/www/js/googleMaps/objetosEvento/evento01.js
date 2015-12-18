(function(window, mapster) {

	var options = {
		center: {
			lat: -22.976836,
			lng: -43.412236
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.976836, -43.412236);

	
}(window, window.Mapster));