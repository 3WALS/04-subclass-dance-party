var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  var step;
  makeDancer.call(this, step);

  this.oldStep = step;
};

makeBlinkyDancer.prototype.step = function () {
  this.oldStep();
  $('<span class="dancer"></span>').toggle();
};
