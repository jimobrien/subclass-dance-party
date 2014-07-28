var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;

  this.step();
  this._timeBetweenSteps(top, left);
};

Dancer.prototype.step = function () {
  var context = this;

  setTimeout( function () { 
    context.step(); 
  }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  this.$node.css({top:top, left:left});
};