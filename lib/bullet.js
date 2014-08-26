var Bullet = Asteroids.Bullet = function (game, startPos, startVel) {
  this.ship = game.ship
  this.color = "green";
  this.radius = 3;
  this.pos = startPos; //maybe add one of the val to this?
  this.vel = startVel; //Will this reference deep dup?
  this.game = game;
}

Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

Bullet.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  if (this.lostBullet()) {
    this.game.remove(this)
  }
}



Bullet.prototype.lostBullet = function (pos){
  if (this.pos[0] > this.game.cWidth || this.pos[0] < 0 || this.pos[1] > this.game.cHeight || this.pos[1] < 0) {
    console.log('to')
    return true
  }
}