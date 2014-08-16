(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (ctx, cWidth, cHeight) {
    this.game = new Asteroids.Game(cWidth, cHeight);
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    var that = this;
    setInterval(function(){
      that.game.draw();
      that.game.step();
    }, 20);
  }
})();