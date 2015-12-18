(function(window, mapster) {

	var options = {
		center: {
			lat: -22.897056,
			lng: -43.195688
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.897056, -43.195688);

	
}(window, window.Mapster));