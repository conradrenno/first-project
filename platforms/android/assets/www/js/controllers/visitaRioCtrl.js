angular.module("visitaRio").controller("visitaRioCtrl", function($scope, $http){
	$scope.app = "VisitaRio";
	$scope.hospitais = [];
	$scope.delegacias = [];
	$scope.pontosTuristicos = [];
	$scope.praias = [];
	$scope.ondeComer = [];
	$scope.ondeDormir = [];
	$scope.eventos = [];
	$scope.banheiros =[];

	var carregarHoteis = function(){
		$http.get('js/json/hoteis.json').success(function (data, status){
			$scope.ondeDormir = data;
		});
	};

	var carregarHospitais = function(){
		$http.get('http://localhost:3000/js/json/postosaude.json').success(function (data, status){
			$scope.hospitais = data;
		});
	};

	var carregarDelegacias = function(){
		$http.get('http://localhost:3000/js/json/delegacias.json').success(function (data, status){
			$scope.delegacias = data;
		});
	};

	var carregarPontos = function(){
		$http.get('http://localhost:3000/js/json/pturistico.json').success(function (data, status){
			$scope.pontosTuristicos = data;
		});
	};

	var carregarPraias = function(){
		$http.get('http://localhost:3000/js/json/praias.json').success(function(data, status){
			$scope.praias = data;
		});
	};

	var carregarBanheiros = function(){
		$http.get('http://localhost:3000/js/json/banheiros.json').success(function(data, status){
			$scope.banheiros = data;
		});
	};

	var carregarRestaurantes = function(){
		$http.get('http://localhost:3000/js/json/restaurantes.json').success(function(data, status){
			$scope.ondeComer = data;
		});
	};

	var carregarEventos = function(){
		$http.get('http://localhost:3000/js/json/eventos.json').success(function(data, status){
			$scope.eventos = data;
		});
	};

	carregarHoteis();
	carregarHospitais();
	carregarDelegacias();
	carregarPontos();
	carregarPraias();
	carregarBanheiros();
	carregarRestaurantes();
	carregarEventos();
});