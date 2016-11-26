app.config(function($translateProvider) {
$translateProvider.translations('es', {
    HEADLINE: '¿Adonde vamos?',
    OPTIONLENGUAGE1: 'Español',
    OPTIONLENGUAGE2: 'Ingles',
    SINGOUT:'Salir',
    
    //  EVENTS TAB
    Event:'Eventos',
    Events: 'Eventos',
    PlannedOutings:'Planear salidas',
    CreateEvent:'Crea aqui tus eventos',
    addFriends:'Agrega a tus amigos',
    
    // FRIENDS TAB
    Friends: 'Amigos',
    MyFriends:'Mis Amigos',
    FriendsAdministration:'Administrar Amigos',
    
    // PROFILE TAB
    Profile: 'Perfil',
    TitleProfile:'Mi Perfil',
    PrefereceProfile:'Edita tus gustos y preferencias aqui',
    MaxAmount:'Monto maximo de salida economica:',
    AddMusical:'Agregar genero musical',
    AddFood:'Agregar gusto gastronomico',
    AddMovie:'Agregar genero de cine',
    AddOther:'Agregar otros gustos',
    
})
.translations('en', {
    HEADLINE: 'Where we go?',
    OPTIONLENGUAGE1: 'Spanish',
    OPTIONLENGUAGE2: 'Inglish',
    SINGOUT:'Sing out',
    
    //  EVENTS TAB
    Event:'Event',
    Events:'Events',
    PlannedOutings:'Planned Outings',
    CreateEvent: 'Create your events here',
    addFriends:'Add your friends',

    // FRIENDS TAB
    Friends:'Friends',
    MyFriends:'My Friends',
    FriendsAdministration:'FriendsAdministration',    

    // PROFILE TAB    
    Profile:'Profile',
    TitleProfile:'My Profile',
    PrefereceProfile:'Edit your likes and preferences here',
    MaxAmount:'Maximum amount for economic',
    AddMusical:'Add musical genre',
    AddFood:'add gastronomic taste',
    AddMovie:'Add movie genre',
    AddOther:'Add other tastes',
});
$translateProvider.preferredLanguage('es');
});


app.controller('changeLanguageCtrl',function($translate,$scope){
	 
	 $scope.languge = "es";
	 console.log($scope.languge);
    $scope.changeLanguage= function(languge){
        $translate.use(languge);
        
    }
})