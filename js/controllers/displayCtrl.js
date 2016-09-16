angular.module('chicken').controller("displayCtrl", function($scope, $state, pokeService){

  $scope.goToMe = function(){
    $state.go('me')
  }
  $scope.searchPokemon = function(name){
      pokeService.search(name).then(function( res ){
        console.log(res);
        $scope.pokeName = ""
        $scope.pokemon = res.data
      })
  }

})
