(function(window, mapster) {

	var options = {
		center: {
			lat: -22.984274,
			lng: -43.200817
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.984274, -43.200817);

	
}(window, window.Mapster));