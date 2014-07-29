// Superclass Dancer

var Dancer = function (top, left, scale, moveSpeed) {
  this.$node = $('<span class="dancer"></span>');
  this._scale = scale;
  this.setPosition(top, left);
  //this.move(moveSpeed);
};

Dancer.prototype.move = function () {

};

Dancer.prototype.setPosition = function (top, left) {
  // check where at on the screep top x left is located
  // calculate the scale based on position
  // adjust the scale of the dancer DOM node
  // append to screen
    //  this.$node.css({top:top, left:left});
};