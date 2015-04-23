myApp.factory('pizzaFactory', function pizzaFactory() {
  var factory = {};
  factory.pizza = [];

  factory.makePizza = function(choice) {
    factory.pizza.push(choice)
  }
  return factory;
})
