myApp.factory('pizzaService', function($http) {
   return {
        getPizza: function() {
             //return the promise directly.
             return $http.get('pizzaStuff.json')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data;
                        });
        }
   }
});
