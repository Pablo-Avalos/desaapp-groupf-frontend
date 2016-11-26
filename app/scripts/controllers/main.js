'use strict';

//var urlBase = "http://desapp-groupf.herokuapp.com/rest/";

var urlBase = "https://desapp-groupf.herokuapp.com/rest/";
	console.log(urlBase);
var app = angular.module('desaappGroupfFrontendApp', ['pascalprecht.translate', 'ngTable','ui.bootstrap']);

app.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	// delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
} ]);


  app.service('systemService', function(){

     // initialize object first
    this.initialize = function (){
    this.myPerfil = {}; 
    this.user = {};
    this.myPerfil.idProfile = 2;
	this.myPerfil.musicalGeneres = [];
	this.myPerfil.moviegeneres = [];
	this.myPerfil.foodTastes = [];
	this.myPerfil.otherLikes = [];
	this.myPerfil.amountMax = 0;
	this.myPerfil.conveyance = "A Pie";
	this.myPerfil.startTime = "";
	this.myPerfil.nik = "";
	this.user.name = "";
	this.user.surname = "";
	this.user.nik = "";
	this.user.mail = "";
	this.user.messages = [];
	this.user.profile = this.myPerfil;
    return this.user;
    }

    this.init = function(user){
    	this.user = user;
    	return this.user;
    }
    this.getUser = function(){
    	return this.user;
    }

	this.updateprofile=function(profile){
       this.user.profile = profile;
       return this.user.profile;
    }
    
   // this.getProfile=function(){
    //   return this.user.profile;
   // }


});


/*
app.controller('ctrlProfile', function($scope, $http) {
	$scope.myPerfil = {};
	// $scope.genreMusical = "JAJAJ";
	$http(
			{
				method : "GET",
				url : "http://desapp-groupf.herokuapp.com/rest/"
						+ "profile/getprofile/1",
				headers : {
					'Content-Type' : 'application/json'
				}
			}).then(
			function mySucces(response) {
				$scope.myPerfil.idProfile = response.data.idProfile;
				$scope.myPerfil.musicalGeneres = response.data.musicalGeneres;
				$scope.myPerfil.foodTastes = response.data.foodTastes;
				$scope.myPerfil.otherLikes = response.data.otherLikes;
				$scope.myPerfil.amountMax = response.data.amountMax;
				$scope.myPerfil.conveyance = response.data.conveyance;
				$scope.myPerfil.startTime = response.data.startTime;
				$scope.myPerfil.nik = response.data.nik;
				console.log(response);
				console.log("id" + $scope.myPerfil.idProfile + " nik: "
						+ $scope.myPerfil.nik);
			}, function myError(response) {
				console.log(response);

				$scope.myPerfil = response.statusText.nik;
			});
});
*/
app.controller('optionMusicalGenre',function($scope, $http, systemService) {
	// $scope.myPerfil = {};
	// $scope.genreMusical = "JAJAJ";
		$scope.availableOptionsMusicalGenre = ["ROCK","SALSA","CUMBIA","CLASICO","ROCK NACIONAL", "HEAVY METAL", "BACHATA", "POP" ,"TANGO" ,"INFANTIL" ,"REAGEE"];
	
	$scope.addMusicalGeneres2 = function() {
		$scope.user = systemService.getUser();
		console.log("-------------------TEST------------------" + $scope.user);

		var nuevo = {};
		nuevo.idGMusical = null;
		nuevo.nameGMusical = $scope.newMusicalGenre;
		$scope.user.profile.musicalGeneres.push(nuevo);
		console.log("MYPREFIL " + $scope.user.profile.musicalGeneres);
		$http(
				{
					method : 'POST',
					url : urlBase + 'profile/updateprofile',
					headers : {
						'Content-Type' : 'application/json',
						'accept' : 'application/json'
					},
					data : $scope.user.profile,
				}).then(
				function mySucces(response) {
					console.log("valor de data.model: "
							+ $scope.newMusicalGenre);
					$scope.user.profile = systemService.updateprofile(response.data);
				}, function myError(response) {
					console.log(response);

					$scope.data.model = "vacio";

				});
	};

});

// controler de FOOD

app.controller('optionFoodGenre', function($scope, $http,systemService) {
	// $scope.myPerfil = {};
	// $scope.genreMusical = "JAJAJ";
	
	$scope.optionNewFoodGenre =["ASADO","POLLO", "ENSALADA","EMPANADA","DULCES", "SANDWICHES" ,"SALSAS"];
	$scope.addFoodGeneres2 = function() {
		$scope.user = systemService.getUser();
		var nuevo = {};
		nuevo.id = null;
		nuevo.name = $scope.newFoodGenre;
				console.log("MYPREFIL " + $scope.user.profile.musicalGeneres);
		$scope.user.profile.foodTastes.push(nuevo);
		$http(
				{
					method : 'POST',
					url :  urlBase +'profile/updateprofile',
					headers : {
						'Content-Type' : 'application/json',
						'accept' : 'application/json'
					},
					data : $scope.user.profile,
				}).then(
				function mySucces(response) {

				$scope.user.profile = systemService.updateprofile(response.data);
			
				}, function myError(response) {
					console.log(response);

					//$scope.data.model = "vacio";

				});
	};

});

// Controler de Movie



app.controller('optionMovieGenre', function($scope, $http , systemService) {
	// $scope.myPerfil = {};
	// $scope.genreMusical = "JAJAJ";
    $scope.typeOptions = [
    { name: 'TERROR', value: 'TERROR' }, 
    { name: 'ACTION', value: 'ACTION' },
    { name: 'DRAMA', value: 'DRAMA' },
    { name: 'COMEDY', value: 'COMEDY' }, 
    { name: 'BELICAS', value: 'BELICAS' },
    { name: 'SUSPENSE', value: 'SUSPENSE' },
    { name: 'ROMANTIC', value: 'ROMANTIC' },
    { name: 'SCIENCE FICTION', value: 'SCIENCE FICTION' }    
    ];
    
    $scope.movieSelect = {type : $scope.typeOptions[0].value};
	$scope.addMovieGeneres2 = function() {
		$scope.user = systemService.getUser();
		var nuevo = {};
		nuevo.id = null;
		nuevo.name = $scope.movieSelect.type;
		$scope.user.profile.moviegeneres.push(nuevo);
		$http(
				{
					method : 'POST',
					url : urlBase + 'profile/updateprofile',
					headers : {
						'Content-Type' : 'application/json',
						'accept' : 'application/json'
					},
					data : $scope.user.profile,
				}).then(
				function mySucces(response) {
              
                 $scope.user.profile = systemService.updateprofile(response.data);   
                
							
				}, function myError(response) {
					console.log(response);

					$scope.data.model = "vacio";

				});
	};



});



app.controller('optionOtherTastes', function($scope, $http , systemService) {
	// $scope.myPerfil = {};
	// $scope.genreMusical = "JAJAJ";

	$scope.addOtherLikes = function() {
		$scope.user = systemService.getUser();
		var nuevo = {};
		nuevo.id = null;
		nuevo.name = $scope.ohterLikeinput;
		$scope.user.profile.otherLikes.push(nuevo);
		$http(
				{
					method : 'POST',
					url : urlBase + 'profile/updateprofile',
					headers : {
						'Content-Type' : 'application/json',
						'accept' : 'application/json'
					},
					data : $scope.user.profile,
				}).then(
				function mySucces(response) {
				$scope.user.profile = systemService.updateprofile(response.data);
							
				}, function myError(response) {
					console.log(response);

					$scope.data.model = "vacio";

				});
	};



});


app.controller('amountMaxCtrl', function($scope, $http , systemService) {
	// $scope.myPerfil = {};
	// $scope.genreMusical = "JAJAJ";
		$scope.amountMaxVal;

	$scope.changeAmoutMax = function() {
		$scope.user = systemService.getUser();
		$scope.user.profile.amountMax = $scope.amountMaxVal;
		$http(
				{
					method : 'POST',
					url : urlBase + 'profile/updateprofile',
					headers : {
						'Content-Type' : 'application/json',
						'accept' : 'application/json'
					},
					data : $scope.user.profile,
				}).then(
				function mySucces(response) {
				$scope.user.profile = systemService.updateprofile(response.data);
							
				}, function myError(response) {
					console.log(response);

				//	$scope.data.model = "vacio";

				});
	};



});

