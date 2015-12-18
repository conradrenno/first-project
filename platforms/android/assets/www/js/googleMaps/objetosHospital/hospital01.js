(function(window, mapster) {

	var options = {
		center: {
			lat: -22.912115,
			lng: -43.687183
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	},
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);


	map.addMarker(-22.912115, -43.687183);

	
}(window, window.Mapster));