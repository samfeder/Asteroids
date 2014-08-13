(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
    }

  var Game = Asteroids.Game = function (cWidth, cHeight) {
    this.asteroids = [];
    this.addAsteroids(Game.NUM_ASTEROIDS);
    this.cWidth = cWidth;
    this.cHeight = cHeight;
  }

  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 20;

  Game.prototype.addAsteroids = function (numTimes) {
    for (var i = 0; i < numTimes; i++ ) {
      var asteroid = new Asteroids.Asteroid(this);
      this.asteroids.push(asteroid);
    }
  }

  Game.prototype.draw = function (){
    ctx.beginPath();
    ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    for (var i=0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
      console.log("objects drawn");
    }
  }

  Game.prototype.moveObject = function (){
    for (var i=0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  }

  Game.prototype.wrap = function (pos){
    var posWrap = pos;

    if (pos[0] > this.cWidth) {
      posWrap[0] = 0;
    }

    if (pos[0] < 0) {
      posWrap[0] = this.cWidth;
    }

    if (pos[1] > this.cHeight) {
      posWrap[1] = 0;
    }

    if (pos[1] < 0) {
      posWrap[1] = this.cHeight;
    }

    return posWrap;
  }
})();