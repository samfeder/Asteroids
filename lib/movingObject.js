(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (object) {
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
    this.game = game;
    //add a this.image
  }

  MovingObject.prototype.draw = function () {
    ctx.fillStyle = this.color;

    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2*Math.PI,
      false
    )

    ctx.fill();
  }

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  }

  MovingObject.prototype.relocate = function () {
    this.pos = Asteroids.Util.randomPos()
    this.vel = [0,0]
  }

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var p1 = this.pos;
    var p2 = otherObject.pos;

    var a = (p1[0] - p2[0]);
    var b = (p1[1] - p2[1]);

    var hypotenuse = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

    if (hypotenuse < this.radius + otherObject.radius){
      // if (this instanceof Ship || otherObject instanceof Ship){
      //   this.game.ship.relocate()
      // }

      return true
    } else {
      return false
    }
  }

})();
