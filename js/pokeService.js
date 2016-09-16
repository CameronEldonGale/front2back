angular.module("chicken").service("pokeService", function($http){
    this.search = function(name){
      return $http({
        method: 'GET',
        url: "https://pokeapi.co/api/v2/pokemon/" + name
      })
    }
})
