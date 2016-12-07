'use strict';
//desappgroupf@gmail.com
app.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	// delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
} ]);

//var urlBase = "http://desapp-groupf.herokuapp.com/rest/";
 var urlBase = "http://localhost:8080/rest/";


app.controller('loginCtrl', function($scope, $http, systemService) {


	$scope.existeUserRes;
	$scope.iniciar = function() {
		var existe = $scope.existeUser($scope.user, $scope);
		console.log($scope.existeUserRes);
		$scope.mainDiv.show = true;
	};
	$scope.crearUser = function(user) {

		$http({
			method : 'POST',
			url : urlBase + 'user/addUser',
			headers : {
				'Content-Type' : 'application/json',
				'accept' : 'application/json'
			},
			data : user,
		}).then(function mySucces(response) {
			console.log(response);
			$scope.existeUserRes = systemService.init(response.data);
			systemService.init($scope.existeUserRes);	
			console.log("Post Log mail" + $scope.existeUserRes.mail);
		}, function myError(response) {
			console.log(response);
			$scope.data.model = "vacio";

		});

	}

	$scope.existeUser = function(user, scope) {
		$http({
			method : "GET",
			url : urlBase + "user/getUserByEmail/" + $scope.user.getEmail(),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function mySucces(response) {
			
			$scope.existeUserRes = systemService.init(response.data);
			systemService.init($scope.existeUserRes);	
			console.log("EXISTE -> " +$scope.existeUserRes.surname);
			
			
			if ($scope.existeUserRes) {
				// inicio;
				console.log("user existente" + $scope.existeUserRes);
				
			} else {
				// creo User desde 0
				var user = {};
				var profile = {};
				profile.idProfile = null;
				profile.musicalGeneres = [];
				profile.moviegeneres = [];
				profile.foodTastes = [];
				profile.otherLikes = [];
				profile.amountMax = 0;
				profile.conveyance = "A Pie";
				profile.startTime = "";
				profile.nik = $scope.user.getEmail();

				user.name = $scope.user.getGivenName();
				user.surname = $scope.user.getFamilyName();
				user.nik = $scope.user.getEmail();
				user.mail = $scope.user.getEmail();
				user.messages = [];
				user.profile = profile;
				$scope.crearUser(user);
				console.log("creando user.....");

			}
		}, function myError(response) {
				var user = {};
				var profile = {};
				profile.idProfile = null;
				profile.musicalGeneres = [];
				profile.moviegeneres = [];
				profile.foodTastes = [];
				profile.otherLikes = [];
				profile.amountMax = 0;
				profile.conveyance = "A Pie";
				profile.startTime = "";
				profile.nik = $scope.user.getEmail();

				user.name = $scope.user.getGivenName();
				user.surname = $scope.user.getFamilyName();
				user.nik = $scope.user.getEmail();
				user.mail = $scope.user.getEmail();
				user.messages = [];
				user.profile = profile;
				$scope.crearUser(user);

		});

	}

	$scope.signOut = function() {
		var auth2 = gapi.auth2.getAuthInstance();
		$scope.existeUserRes.mail = "";
		auth2.signOut().then(function() {
			console.log("email :" + $scope.user.getEmail());
			console.log('User signed out.');
			$scope.existeUserRes.mail = "";
			$scope.mainDiv = false;
			document.getElementById("mainDiv").style.display = "none";

		});
	};

});
