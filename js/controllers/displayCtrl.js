angular.module('chicken').controller("displayCtrl", function($scope, $state){

  $scope.goToMe = function(){
    $state.go('me')
  }

})
