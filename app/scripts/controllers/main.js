'use strict';

/**
 * @ngdoc function
 * @name desaappGroupfFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desaappGroupfFrontendApp
 
angular.module('desaappGroupfFrontendApp')
  .controller('myCtrl',function($scope, $http) {

    
    $http.get("http://desapp-groupf.herokuapp.com/rest/profile/getprofile/2")
    .then(function(response) {
        $scope.myPerfil = response.data;
        console.log(myperfil);
        })
    ;}
    
  );
  */
  var urlBase = "https://desapp-groupf.herokuapp.com/rest/";
  var app = angular.module('desaappGroupfFrontendApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : urlBase + "profile/getprofile/2",
        headers: {'Content-Type': 'application/json'}
    }).then(function mySucces(response) {
        $scope.myPerfil = response.data.nik;
        console.log(response);
    }, function myError(response) {
            console.log(response);

        $scope.myPerfil = response.statusText.nik;
    });
});

