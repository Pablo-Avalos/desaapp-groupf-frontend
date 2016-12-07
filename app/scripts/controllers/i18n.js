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
    ErroNullItemModal: 'Error al agregar el elemento',
    ErroNullItemModalBody: 'Debe seleccionar un elemento de la lista para agregar',
    Accept: 'Aceptar',
    ALERT_MSG: 'El monto ingresado no es valido, por favor ingrese un monto valido para continuar',
    Title:'Titulo: ',
    Description:'Descripcion: ',
    Attend: 'Asistir',
    Close: 'Cerrar',
    pressToView:'Presione para ver',
    EventDateAndTime:'Fecha y hora del evento: ',
    Date:'Fecha: ',
    StarTime: 'Hora de inicio: ',
    EndTime: 'Hora de finalizacion: ',
    PeopleAmount:'Cantidad de personas: ',
    Place:'Lugar: ',
    Price: 'Precio: ',
    Money:'$ ',
    Participants: 'Participantes: ',
    Alone: 'Solo',
    InTwosome:'Media Naranja',
    InGruop:'En grupo',
    WithFriend: 'Con Amigos',
    permitido:'permitido',
})
.translations('en', {
    HEADLINE: 'Where we go?',
    OPTIONLENGUAGE1: 'Spanish',
    OPTIONLENGUAGE2: 'English',
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
    ErroNullItemModal: 'Error adding item',
    ErroNullItemModalBody: 'You must select an item from the list to add',
    Accept: 'Accept',
    ALERT_MSG: 'The amount entered is not valid, please enter a valid amount to continue',
    Title:'Title: ',
    Description: 'Description',
    Attend: 'Attend',
    Close: 'Close',
    pressToView: 'Press to view',
    EventDateAndTime:'Date and time of the event: ',
    Date:'Date: ',
    StarTime: 'Star time: ',
    EndTime: 'Ending time: ',
    PeopleAmount:'Amount of people: ',
    Place: 'Place: ',
    Price: 'Price: ',
    Money:'U$S ',
    Participants: 'Participants: ',
    Alone:'Alone',
    InTwosome: 'In Twosome',
    InGruop: 'In Gruop',
    WithFriend:'With Friend',
    permitido:'permitido',
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