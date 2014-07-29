var Sharkhorse = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

Sharkhorse.prototype = Object.create(Dancer.prototype);
Sharkhorse.prototype.constructor = Sharkhorse;

Sharkhorse.prototype.oldStep = Sharkhorse.prototype.step;

Sharkhorse.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
