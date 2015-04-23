var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: "partials/home.html"
  });
});
