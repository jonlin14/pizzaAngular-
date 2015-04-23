myApp.controller('pizzaCtrl', function pizzaCtrl($scope, $http, pizzaFactory, pizzaService) {
  $scope.dough = [{ name: "Regular"}, { name: "Flat Bread" }],
  pizzaService.getPizza().then(function(pizzaChoices) {
          $scope.pizzaChoices = pizzaChoices;
      });
  $scope.pizza = $scope.pizzaChoices;
  $scope.addPizza = function(doughType) {
    pizzaFactory.makePizza(doughType)
  }

});
