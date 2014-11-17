(function(){
  var app = angular.module('app.game', []);

  app.config(function($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        abstract: true,
        template: '<div class="game"><div ui-view></div></div>'
      })
      .state('game.play', {
        url: '/:id',
        template: '<div><div class="gameCanvas"></div></div>',
        controller: 'GameController'
      });
  });
})();
