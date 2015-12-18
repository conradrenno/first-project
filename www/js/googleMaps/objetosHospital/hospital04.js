(function(window, mapster) {

	var options = {
		center: {
			lat: -22.862665,
			lng: -43.280633
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.862665, -43.280633);

	
}(window, window.Mapster));