"use strict";angular.module("desaappGroupfFrontendApp",["ngResource"]);var urlBase="https://desapp-groupf.herokuapp.com/rest/",app=angular.module("desaappGroupfFrontendApp",[]);app.controller("myCtrl",["$scope","$http",function(a,b){b({method:"GET",url:urlBase+"profile/getprofile/2",headers:{"Content-Type":"application/json"}}).then(function(b){a.myPerfil=b.data.nik,console.log(b)},function(b){console.log(b),a.myPerfil=b.statusText.nik})}]),angular.module("desaappGroupfFrontendApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);