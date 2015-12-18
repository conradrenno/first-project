(function(window, google) {

	var Mapster = (function(){
		function Mapster(element, opts){
			this.gMap = new google.maps.Map(element, opts);
		}
		Mapster.prototype = {
			addMarker: function(lat, lng){
				this._createMarker(lat, lng);
			},
			_createMarker: function(lat, lng){

				var opts = {
					position: {
						lat: lat,
						lng: lng
					},
					map: this.gMap
				};
				return new google.maps.Marker(opts);
			}
		};
		return Mapster;
	}());

	Mapster.create = function(element, opts) {
		return new Mapster(element, opts);
	};

	window.Mapster = Mapster;
}(window, google));