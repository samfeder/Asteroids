var Ship = Asteroids.Ship = function (game, startPos) {
  this.color = "red";
  this.radius = 5;
  this.pos = Asteroids.Util.randomPos();
  this.vel = [0,0]
  this.game = game;
}

Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

Ship.prototype.power = function(impulse){
  this.vel[0] += impulse[0]
  this.vel[1] += impulse[1]
}
