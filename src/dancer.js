var makeDancer = function(top, left, timeBetweenSteps){
  //this.$node = $('<span class="dancer"></span>');
  makeDancer.prototype.step();
  //this.prototype.step();
  //makeDancer.step();
  //this.step();
  makeDancer.prototype.setPosition(top, left);
};

makeDancer.prototype.step = function () {
  setTimeout(makeDancer.prototype.step, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  $('<span class="dancer"></span>').css(styleSettings);
};

var dancer = new makeDancer(10, 20, 20);
