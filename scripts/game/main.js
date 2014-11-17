window.createGame = function(scope, players, mapId, injector) {
  var height  = parseInt(ele.css('height'), 10),
      width   = parseInt(ele.css('width'), 10);
  var game = new Phaser.Game(width, height, Phaser.AUTO, 'gameCanvas');

  scope.$on('$destroy', function() {
    game.destroy(); // Clean up the game when we leave this scope
  });

  scope.$on('game:toggleMusic', function() {
    Game.toggleMusic(); // some function that toggles the music
  });
};
