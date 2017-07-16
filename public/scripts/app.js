var app = angular.module ( 'app', ['ngRoute', 'angucomplete-alt', 'xeditable', 'ui.bootstrap', 'angular-filepicker'] );

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

// myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

app.config(['$routeProvider', '$locationProvider', 'filepickerProvider', function($routeProvider, $locationProvider, filepickerProvider) {
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});

  $routeProvider
    .when('/login', {
    templateUrl: 'views/partials/login.html',
    controller: 'UserController as uc'
  }).when('/plants', {
    templateUrl: 'views/partials/plants.html',
    controller: 'PlantController as pc'
  }).when('/register', {
    templateUrl: 'views/register.html'
  }).when('/failure', {
    templateUrl: 'views/failure.html'
  }).when ('/wishlist', {
    templateUrl: 'views/partials/wishlist.html',
    controller: 'PlantController as pc'
  }).when ('/add-new-plant', {
    templateUrl: 'views/partials/add-new-plant.html',
    controller: 'PlantController as pc'
  }).when ('/wishlist-plant-specs', {
    templateUrl: 'views/partials/wishlist-plant-specs.html',
    controller: 'PlantController as pc'
  }).when ('/detail/:id', {
    templateUrl: 'views/partials/detail.html',
    controller: 'PlantController as pc'
  }).otherwise({
      redirectTo: '/login'
    });
  filepickerProvider.setKey('ASsVBhFqLQGGBwDxVquEqz');
}]); // end app.config

// client.retrieve('eEHjciGBSAyaLAi868Ms');
// var client = filestack.init('ASsVBhFqLQGGBwDxVquEqz');
//
// function showPicker() {
//     client.pick({
//       accept: 'image/*',
//       maxFiles: 1
//     }).then(function(result) {
//         console.log(JSON.stringify(result.filesUploaded))
//     });
// }; // end client filestack
