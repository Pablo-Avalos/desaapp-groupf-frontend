'use strict';

  var urlBase = "http://desapp-groupf.herokuapp.com/rest/";
  var app = angular.module('desaappGroupfFrontendApp', []);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
     $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
    }
]);

app.controller('ctrlProfile', function($scope, $http) {
$scope.myPerfil = {};
//$scope.genreMusical = "JAJAJ";    
    $http({
        method : "GET",
        url : urlBase + "profile/getprofile/2",
        headers: {'Content-Type': 'application/json'}
    }).then(function mySucces(response) {
        $scope.myPerfil.idProfile =  response.data.idProfile;
        $scope.myPerfil.musicalGeneres = response.data.musicalGeneres;
        $scope.myPerfil.foodTastes = response.data.foodTastes;
        $scope.myPerfil.otherLikes = response.data.otherLikes;
        $scope.myPerfil.amountMax = response.data.amountMax;
        $scope.myPerfil.conveyance = response.data.conveyance;
        $scope.myPerfil.startTime = response.data.startTime;
        $scope.myPerfil.nik = response.data.nik;
        console.log(response);
        console.log("id" + $scope.myPerfil.idProfile + " nik: " + $scope.myPerfil.nik );
   }, function myError(response) {
            console.log(response);

        $scope.myPerfil = response.statusText.nik;
    });
/*
    $scope.addMusicalGeneres = function(){
        var nuevo = {};
        nuevo.id= null;
        nuevo.name = $scope.musicalImput;
        $scope.myPerfil.musicalGeneres.push(nuevo);
        console.log("MYPREFIL " + $scope.myPerfil.musicalGeneres);
        $http({
        method : 'POST', 
        url : urlBase + 'profile/updateprofile',
        headers: {'Content-Type': 'application/json' , 'accept': 'application/json'},
        data : $scope.myPerfil,
    }).then(function mySucces(response) {
        console.log("MYPREFIL " + $scope.myPerfil);
        $scope.myPerfil.idProfile =  response.data.idProfile;
        $scope.myPerfil.nik = response.data.nik;
        $scope.myPerfil.conveyance = response.data.conveyance;
        console.log(response);
        console.log("id" + $scope.myPerfil.idProfile + " nik: " + $scope.myPerfil.nik );
   }, function myError(response) {
            console.log(response);

        $scope.myPerfil = "vacio";
       
       
    });
        
   
    $scope.hola = $scope.musicalImput;
    };
  */  
  
/*
    var dataRequest = '{"idProfile": null,"musicalGeneres": null,"moviegeneres": null,"foodTastes": null,"otherLikes": null,"amountMax":10,"conveyance": null,"startTime": null,"nik": "pepe"}';
  

app.controller('myCtrl', function($scope, $http) {
$scope.myPerfil = {};
    $http({
        method : 'POST',
        url : urlBase + 'profile/addprofile',
        headers: {'Content-Type': 'application/json' , 'accept': 'application/json'},
        data : dataRequest
    }).then(function mySucces(response) {
        $scope.myPerfil.idProfile =  response.data.idProfile;
        $scope.myPerfil = response.data.nik;
        $scope.myPerfil.nik = response.data.nik;
        $scope.myPerfil.conveyance = response.data.conveyance;
        console.log(response);
        console.log("id" + $scope.myPerfil.idProfile + " nik: " + $scope.myPerfil.nik );
   }, function myError(response) {
            console.log(response);

        $scope.myPerfil = "vacio";
       
       
    });
*/
//$scope.myPerfil = 'MY PERFIL !!!!!!!!!!!!!!';
//console.log($scope.myPerfil);
});

app.controller('optionMusicalGenre', function($scope,$http) {
   // $scope.myPerfil = {};
//$scope.genreMusical = "JAJAJ";    
    $http({
        method : "GET",
        url : urlBase + "profile/getprofile/2",
        headers: {'Content-Type': 'application/json'}
    }).then(function mySucces(response) {
        $scope.availableOptions= response.data.musicalGeneres;
   }, function myError(response) {
            console.log(response);

        $scope.eltema = "error";
    });
    
    
      $scope.addMusicalGeneres2 = function(){
        var nuevo = {};
        nuevo.id= null;
        nuevo.name = $scope.newMusicalGenre;
        $scope.myPerfil.musicalGeneres.push(nuevo);
        console.log("MYPREFIL " + $scope.myPerfil.musicalGeneres);
        $http({
        method : 'POST', 
        url : urlBase + 'profile/updateprofile',
        headers: {'Content-Type': 'application/json' , 'accept': 'application/json'},
        data : $scope.myPerfil,
    }).then(function mySucces(response) {
        console.log("valor de data.model: " + $scope.newMusicalGenre);
        $scope.myPerfil.idProfile =  response.data.idProfile;
        $scope.myPerfil.nik = response.data.nik;
        $scope.myPerfil.conveyance = response.data.conveyance;
        console.log(response);
        console.log("id" + $scope.myPerfil.idProfile + " nik: " + $scope.myPerfil.nik );
   }, function myError(response) {
            console.log(response);

        $scope.data.model = "vacio";
       
       
    });
    };

}); 


// controler de FOOD

app.controller('optionFoodGenre', function($scope,$http) {
   // $scope.myPerfil = {};
//$scope.genreMusical = "JAJAJ";    
    $http({
        method : "GET",
        url : urlBase + "profile/getprofile/2",
        headers: {'Content-Type': 'application/json'}
    }).then(function mySucces(response) {
        $scope.availableFoodOptions= response.data.foodTastes;
   }, function myError(response) {
            console.log(response);

        $scope.eltema = "error";
    });
    
    
      $scope.addFoodGeneres2 = function(){
        var nuevo = {};
        nuevo.id= null;
        nuevo.name = $scope.newFoodGenre;
        $scope.myPerfil.foodTastes.push(nuevo);
        console.log("MYPREFIL " + $scope.myPerfil.foodTastes);
        $http({
        method : 'POST', 
        url : urlBase + 'profile/updateprofile',
        headers: {'Content-Type': 'application/json' , 'accept': 'application/json'},
        data : $scope.myPerfil,
    }).then(function mySucces(response) {
        console.log("valor de data.model: " + $scope.data.model);
        $scope.myPerfil.idProfile =  response.data.idProfile;
        $scope.myPerfil.nik = response.data.nik;
        $scope.myPerfil.conveyance = response.data.conveyance;
        console.log(response);
        console.log("id" + $scope.myPerfil.idProfile + " nik: " + $scope.myPerfil.nik );
   }, function myError(response) {
            console.log(response);

        $scope.data.model = "vacio";
       
       
    });
    };

});

// Controler de Movie

app.controller('optionMovieGenre', function($scope,$http) {
   // $scope.myPerfil = {};
//$scope.genreMusical = "JAJAJ";    
    $http({
        method : "GET",
        url : urlBase + "profile/getprofile/2",
        headers: {'Content-Type': 'application/json'}
    }).then(function mySucces(response) {
        $scope.availableMovieOptions= response.data.movieGenre;
   }, function myError(response) {
            console.log(response);

        $scope.eltema = "error";
    });
    
    
      $scope.addMovieGeneres2 = function(){
        var nuevo = {};
        nuevo.id= null;
        nuevo.name = $scope.newMovieGenre;
        $scope.myPerfil.movieTastes.push(nuevo);
        console.log("MYPREFIL " + $scope.myPerfil.movieGenre);
        $http({
        method : 'POST', 
        url : urlBase + 'profile/updateprofile',
        headers: {'Content-Type': 'application/json' , 'accept': 'application/json'},
        data : $scope.myPerfil,
    }).then(function mySucces(response) {
        console.log("valor de data.model: " + $scope.data.model);
        $scope.myPerfil.idProfile =  response.data.idProfile;
        $scope.myPerfil.nik = response.data.nik;
        $scope.myPerfil.conveyance = response.data.conveyance;
        console.log(response);
        console.log("id" + $scope.myPerfil.idProfile + " nik: " + $scope.myPerfil.nik );
   }, function myError(response) {
            console.log(response);

        $scope.data.model = "vacio";
       
       
    });
    };

});