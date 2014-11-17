(function(){
  var app = angular.module('app.menu', []);

  app.config(function($stateProvider) {
    $stateProvider.state('menu', {
      url: '',
      templateUrl: '/scripts/menu/main.html',
      controller: 'MenuController as menuCtrl'
    });
  });
})();
