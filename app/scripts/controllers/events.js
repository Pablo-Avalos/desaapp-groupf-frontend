//var urlBase = "http://desapp-groupf.herokuapp.com/rest/";
 var urlBase = "http://localhost:8080/rest/";

var events_attend_controler;
var bind_events_attend_controler;
var events_attend_controler_scope;

var events_create_controler;
var bind_events_create_controler;
//var null_item_controler = document.querySelector('[ng-controller="nullItemModal"]');
//var bind_null_item_controler = angular.element(null_item_controler);
//var null_item_controler_scope = bind_null_item_controler.scope();

var feedbackController;
var bindFeedBack;

app.controller('createEvent', function($scope, $http,systemService,$filter) {



    $scope.places = [];   
      $http({
        method : "GET",
        url : urlBase + "utils/places",
        headers : {'Content-Type' : 'application/json'}
        }).then(function mySucces(response) {

            $scope.places = response.data;
            console.log($scope.places);
        }
        , function myError(response) {

        });




$scope.likeOptions = [];


$scope.typeEvent;
$scope.newEvent = {};
$scope.newEvent.idEvent = null;
$scope.newEvent.title = "";
$scope.newEvent.starTime = null;
$scope.newEvent.endTime = null;
$scope.newEvent.date =  null;
$scope.newEvent.description = null;
$scope.newEvent.idsSuggestionsRelation = null;
$scope.newEvent.cantPerson = 0;
$scope.newEvent.price = 0;
$scope.newEvent.alone = false;
$scope.newEvent.inTwosome = false;
$scope.newEvent.inGruop = false;
//$scope.newEvent.place = {};
//$scope.newEvent.place = $scope.places[0];
$scope.newEvent.users = [];
$scope.newEvent.genere = null;
$scope.newEvent.avaliable = null;
$scope.like ={};
$scope.place;
$scope.dateTemp;

$scope.createEvent = function(){



feedbackController = document.querySelector('[ng-controller="feedbackControl"]');
bindFeedBack = angular.element(feedbackController);

events_controler = document.querySelector('[ng-controller="eventsTableController"]');
bind_events_controler = angular.element(events_controler);


bindFeedBack.scope().feedbackOK("Creanting Event....");


$scope.newEvent.place = $scope.place;
         $http({    
                    method : 'POST',
                    url : urlBase + 'event/'+$scope.typeEvent + '/' +systemService.getUser().idUser +  '/' + $scope.like ,
                    headers : {
                        'Content-Type' : 'application/json',
                        'accept' : 'application/json'
                    },
                    data : $scope.newEvent
                }).then(
                function mySucces(response) {
                    console.log(response.data.idEvent);
                    bindFeedBack.scope().feedback = false;
                    $scope.cancel();
                    bind_events_controler.scope().reload();
                    bind_events_controler.scope().launchEvenTwindow(response.data);    
                  
                }, function myError(response) {
                    console.log(response);
                    bindFeedBack.scope().feedback = false

                });
                };



 $scope.showopenCreateEvent = false;
  $scope.openCreateEvent = function() {
    $scope.showopenCreateEvent = true;
  };

  $scope.ok = function() {
    $scope.showopenCreateEvent = true;
  };

  $scope.cancel = function() {
    $scope.showopenCreateEvent = false;
  };

  $scope.create = function(){
    $scope.createEvent();

  }

  $scope.changeOptions = function(){

    if($scope.typeEvent  == 'addmovieevent')
     {
        document.getElementById("selectCreate").style.display = 'block';
        document.getElementById("otherCrete").style.display = 'none';     
        $scope.likeOptions = [ "TERROR","ACCION", "DRAMA", "COMEDIA","BELICAS","SUSPENSO","ROMANTICO'","CIENCIA FICCION","CIENCIA FICCION" ];

        return;
     }   
         if($scope.typeEvent  == 'addfoodevent')
     {
        document.getElementById("selectCreate").style.display = 'block';
        document.getElementById("otherCrete").style.display = 'none';
        $scope.likeOptions = ["ASADO","POLLO", "ENSALADA","EMPANADA","DULCES", "SANDWICHES" ,"SALSAS"];
        return;
     }
         if($scope.typeEvent  == 'addmusicalevent')
     {
        document.getElementById("selectCreate").style.display = 'block';
        document.getElementById("otherCrete").style.display = 'none';

        $scope.likeOptions = ["ROCK","SALSA","CUMBIA","CLASICO","ROCK NACIONAL", "HEAVY METAL", "BACHATA", "POP" ,"TANGO" ,"INFANTIL" ,"REAGEE"];
        return;
     }
         if($scope.typeEvent  == 'addotherevent')
     {
        document.getElementById("selectCreate").style.display = 'none';
        document.getElementById("otherCrete").style.display = 'block';

         return;
     }   
   
   

  } 


});





app.controller('eventsTableController', function($scope, $http, systemService,$filter) {
        
    events_attend_controler = document.querySelector('[ng-controller="seeDetail"]');
    bind_events_attend_controler = angular.element(events_attend_controler);
    events_attend_controler_scope = bind_events_attend_controler.scope();
		
    events_create_controler = document.querySelector('[ng-controller="createEvent"]');
    bind_events_create_controler = angular.element(events_create_controler);

    $scope.cant= 0;

    
    $scope.openCreate = function(){
       bind_events_create_controler.scope().openCreateEvent();
    }

    $scope.items = [];   
      $http({
        method : "GET",
        url : urlBase + "event/events",
        headers : {'Content-Type' : 'application/json'}
        }).then(function mySucces(response) {

            $scope.items = response.data;
            console.log("_______________________-----> items: ");
             $scope.reload();

        }
        , function myError(response) {

        });


    $scope.buscarPersons = function(){
     
     var personsCant = $scope.cant;

      $http({
            method : "GET",
            url : urlBase + "event/filter/cantPerson/" + 6,
            headers : {'Content-Type' : 'application/json'}
            }).then(function mySucces(response) {

                $scope.items = response.data;
                $scope.reload();
                $scope.cant = 0;
            }
            , function myError(response) {
                 $scope.cant = 0;
                         $scope.reload();
        
            });
        }
    
   // $scope.filterProfile;
   
   $scope.cambiarListab=function(){

   }

   $scope.buscar = function(){

    console.log(systemService.getListBy($scope.filterProfile));
    $http({
            method : 'POST',
            url : urlBase + "event/filter/"+ $scope.filterProfile,
            headers : {'Content-Type' : 'application/json'},
            data: systemService.getListBy($scope.filterProfile)

            }).then(function mySucces(response) {

                $scope.items = response.data;
                $scope.reloadPaginate();
                $scope.filterProfile = "";
            }
            , function myError(response) {
                 $scope.cant = 0;
                         $scope.reload();
        
            });
        }
    


    
    $scope.reload = function(){

      $http({
        method : "GET",
        url : urlBase + "event/events",
        headers : {'Content-Type' : 'application/json'}
        }).then(function mySucces(response) {
            $scope.items = response.data;
        }
        , function myError(response) {

        });


        var div = Math.floor($scope.items.length / $scope.itemsPerPage);
        console.log("DIV" + div);


         $scope.gap = (($scope.items.length % $scope.itemsPerPage) == 0) ? div : div + 1 ;
          $scope.search();
          $scope.groupToPages();
    }
    $scope.reloadPaginate=function(){

        var div = Math.floor($scope.items.length / $scope.itemsPerPage);
        console.log("DIV" + div);


         $scope.gap = (($scope.items.length % $scope.itemsPerPage) == 0) ? div : div + 1 ;
          $scope.search();
          $scope.groupToPages();

    }

    $scope.sort = {       
                sortingOrder : 'idEvent',
                reverse : false
            };
    
    $scope.gap = $scope.items.length / $scope.itemsPerPage;
    

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    //$scope.pagedItems = [];
    //$scope.currentPage = 0;



 var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
            for(var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
//        $scope.groupToPages();
    };
    
  
    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };
    
    $scope.range = function (size,start, end) {
        var ret = [];        
       // console.log(size,start, end);
                      
        if (size < end) {
            end = size;
            start = size-$scope.gap;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }        
       //  console.log(ret);        
        return ret;
    };
    
    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };
    
    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
//    $scope.search();

   $scope.showPermitido = function(){
        return true;
    }
   
    $scope.launchEvenTwindow = function(item) {
        $scope.amigos = [1,2,3];
        bind_events_attend_controler.scope().seeDetail= item.title;  
        bind_events_attend_controler.scope().seeDetailBody= item.description;
        bind_events_attend_controler.scope().price= item.price;
        bind_events_attend_controler.scope().date=item.dateString;
        bind_events_attend_controler.scope().starTime=item.starTime;
        bind_events_attend_controler.scope().endTime=item.endTime;
        bind_events_attend_controler.scope().numberPeople=item.cantPerson;
        bind_events_attend_controler.scope().placeName=item.place.name,
        bind_events_attend_controler.scope().placeAddress=item.place.address,
        bind_events_attend_controler.scope().friends=item.users,
            
        bind_events_attend_controler.scope().isAlone=item.alone,
        bind_events_attend_controler.scope().isInTwosome=item.inTwosome,
        bind_events_attend_controler.scope().isInGruop=item.inGruop,
        bind_events_attend_controler.scope().idProfile = 1,
        bind_events_attend_controler.scope().events = item.idEvent,    
        //bind_events_attend_controler.scope().isWithFriend=item.withFriend,
        //bind_events_attend_controler.scope().isSaturNight=item.saturNight,    
        bind_events_attend_controler.scope().openShowModalSeeDetail();
    };  
    
    $scope.removeRow = function(item) {
        var element = document.getElementById("tr"+item.idEvent);
        element.outerHTML = "";
        delete element;
        //$scope.pagedItems.splice(item.idEvent, 1);
    };
    
    

});


app.$inject = ['$scope', '$filter'];

app.directive("customSort", function() {
return {
    restrict: 'A',
    transclude: true,    
    scope: {
      order: '=',
      sort: '='
    },
    template : 
      ' <a ng-click="sort_by(order)" style="color: #555555;">'+
      '    <span ng-transclude></span>'+
      '    <i ng-class="selectedCls(order)"></i>'+
      '</a>',
    link: function(scope) {
                
    // change sorting order
    scope.sort_by = function(newSortingOrder) {       
        var sort = scope.sort;
        
        if (sort.sortingOrder == newSortingOrder){
            sort.reverse = !sort.reverse;
        }                    

        sort.sortingOrder = newSortingOrder;        
    };
    
   
    scope.selectedCls = function(column) {
        if(column == scope.sort.sortingOrder){
            return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
        }
        else{            
            return'icon-sort' 
        } 
    };
        
  }// end link
}
});


app.controller("seeDetail", function($scope, systemService,$http) {

  $scope.openShowModalSeeDetail = function() {
    $scope.showModalSeeDetail = true;
  };

  $scope.ok = function() {
    $scope.showModalSeeDetail = true;
  };

  $scope.cancel = function() {
    $scope.showModalSeeDetail = false;
  };
    
  $scope.attend=function(idUser,idEvent){
      		$http(
				{
					method : 'POST',
          url : urlBase + 'user/attendEvent/' + systemService.getUser().idUser + "/" + idEvent,
					headers : {
						'Content-Type' : 'application/json',
						//'accept' : 'application/json'
					},
				}).then(
				function mySucces(response) {
				//$scope.user.events = systemService.updateprofile(response.data);
	       console.log(response.data);
        events_controler = document.querySelector('[ng-controller="eventsTableController"]');
        bind_events_controler = angular.element(events_controler);
        bind_events_controler.scope().reload();


				}, function myError(response) {
					//console.log(response);

					//$scope.data.model = "vacio";

				});
  }
        
});



app.controller("feedbackControl", function($scope, systemService,$http) {

  $scope.feedback = false;
  $scope.feedbackOK = function(mesaggeParam) {
    $scope.feedback = true;
    $scope.message = mesaggeParam
  };

});
