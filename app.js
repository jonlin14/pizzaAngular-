var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: 'partials/home.html'
  });
  $stateProvider.state('getStarted', {
    url:'/getStarted',
    templateUrl: 'partials/getStarted.html',
    controller: 'pizzaCtrl'
  });
  $stateProvider.state('toppings', {
    url:'/:name',
    templateUrl: "partials/toppings.html",
    controller: 'pizzaCtrl'
  });
});
