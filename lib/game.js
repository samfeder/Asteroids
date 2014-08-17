(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
    }

  var Game = Asteroids.Game = function (cWidth, cHeight) {
    this.asteroids = [];
    this.ship = Asteroids.Ship(this)
    this.addAsteroids(Game.NUM_ASTEROIDS);
    this.cWidth = cWidth;
    this.cHeight = cHeight;
    this.buildShip();
  }

  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.ship)
  }

  Game.prototype.addAsteroids = function (numTimes) {
    for (var i = 0; i < numTimes; i++ ) {
      var asteroid = new Asteroids.Asteroid(this);
      this.asteroids.push(asteroid);
    }
  }

  Game.prototype.buildShip = function () {
    var pos = Asteroids.Util.randomPos()
    var ship = new Asteroids.Ship(this, pos)
    this.ship = ship
  }

  Game.prototype.draw = function (){
    ctx.beginPath();
    ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  }

  Game.prototype.moveObject = function (){
    this.allObjects().forEach(function (object) {
      object.move()
    })
  }

  Game.prototype.checkCollisions = function (){
    var objects = this.allObjects()
    for (var i = 0; i < objects.length; i++ ){
      for (var j = i + 1; j < objects.length; j++ ){
        if (objects[i].isCollidedWith(objects[j])) {

          console.log("COLLISION!");
        }
      }
    }
  }

  Game.prototype.remove = function (object) {
    if (object instanceof Asteroids.Asteroid){
      var idx = this.asteroids.indexOf(object)
      this.asteroids.splice(idx, 1);
    }
    else if (object instanceof Asteroids.Ship){
      this.buildShip()
    }
  }

  Game.prototype.step = function (){
    this.draw()
    this.moveObject();
    this.checkCollisions();
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