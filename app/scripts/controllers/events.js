var urlBase = "http://desapp-groupf.herokuapp.com/rest/";
 //var urlBase = "http://localhost:8080/rest/";


app.controller('eventsTableController', function($scope, $http,systemService) {
		
	$scope.allevents =[];

	 $scope.filteredTodos = []
	 ,$scope.currentPage = 1
  	,$scope.numPerPage = 3
  	,$scope.maxSize = 5;


	$http({
		method : "GET",
		url : urlBase + "event/events",
		headers : {'Content-Type' : 'application/json'}
		}).then(function mySucces(response) {

			$scope.allevents = response.data;
		}
		, function myError(response) {

		});

$scope.numPages = function () {
    return Math.ceil($scope.allevents.length / $scope.numPerPage);
  };

  $scope.$watch("currentPage + numPerPage", function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;

    $scope.filteredTodos = $scope.allevents.slice(begin, end);
  });

});
