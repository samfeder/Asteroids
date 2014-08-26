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

Ship.prototype.fireBullet = function(){
  if (!(this.vel[0] === 0 && this.vel[1] === 0) && this.game.bullets.length < 6){
    var bulletPos = [this.pos[0]+1, this.pos[1]+1]
    var bulletVel = [this.vel[0]*1.5, this.vel[1]*1.5]
    var bullet = new Asteroids.Bullet(this.game, bulletPos, bulletVel)
    this.game.add(bullet)
  }
}