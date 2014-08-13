(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (game) {
    this.color = "blue";
    this.radius = 15;
    this.pos = Asteroids.Util.randomPos();
    this.vel = Asteroids.Util.randomVec();
    this.game = game;
  }

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();