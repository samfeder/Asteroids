(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (ctx, cWidth, cHeight) {
    this.game = new Asteroids.Game(cWidth, cHeight);
    this.ctx = ctx;
    this.ship = this.game.ship
  }

  GameView.prototype.bindKeyHandlers = function(){
    var that = this
    key('down', function(){ that.ship.power([0,3]) } )
    key('up', function(){ that.ship.power([0,-3]) } )
    key('right', function(){ that.ship.power([3,0]) })
    key('left', function(){ that.ship.power([-3,0]) })
    // key('right', this.game.ship.changeVel.bind(this.game.ship, [3,0]))
    // key('left', this.game.ship.changeVel.bind(this.game.ship, [-3,0]))
    // key('space', this.game.ship.shoot.bind(this.game.ship))

  };

  GameView.prototype.start = function () {
    var that = this;
    this.bindKeyHandlers();
    setInterval(function(){that.game.step()}, 20);
  }
})();