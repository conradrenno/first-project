(function(window, mapster) {

	var options = {
		center: {
			lat: -22.852716,
			lng: -43.324794
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.852716, -43.324794);

	
}(window, window.Mapster));