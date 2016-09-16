angular.module("chicken",["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '../view/home.html',
          controller: 'mainCtrl'
      })
      .state('display', {
          url: '/display',
          templateUrl: '../view/display.html',
          controller: 'displayCtrl'
      })
      .state('me', {
          url: '/me',
          templateUrl: '../view/me.html',
          controller: 'meCtrl'
      })

    $urlRouterProvider.otherwise('/')

  })
