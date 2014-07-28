var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = BlinkyDancer.prototype.step;

BlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};


// BlinkyDancer.step => BlinkyDancer.prototype.step => Dance.prototype.step