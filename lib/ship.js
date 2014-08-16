var Ship = Asteroids.Ship = function (game, startPos) {
  this.color = "red";
  this.radius = 5;
  this.pos = startPos
  this.vel = [0,0]
  this.game = game;
}

Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);
