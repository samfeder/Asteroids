(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Util = Asteroids.Util = {};

  Util.randomPos = function() {
    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 600);

    return [x, y];
  };

  Util.randomVec = function() {
    var dx = Math.ceil(Math.random() * 10) - 6;
    var dy = Math.ceil(Math.random() * 10) - 6;

    return [dx, dy];
  };

  Util.inherits = function (ChildClass, BaseClass) {
    function Surrogate () {};
    Surrogate.prototype = BaseClass.prototype;
    ChildClass.prototype = new Surrogate();
  };
})();