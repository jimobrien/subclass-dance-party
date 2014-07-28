var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  var context = this;
  
  setTimeout( this.step.bind(context), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  this.$node.css({top:top, left:left});
};