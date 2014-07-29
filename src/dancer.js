// Superclass Dancer

var Dancer = function (top, left, moveSpeed) {
  var context = this;
  console.log('img/' + this.skins[Math.floor(Math.random() * this.skins.length)] + '.gif');
  this.$node = $('<span class="dancer"></span>');
  this.setSkin();
  this.setPosition(top, left);
  
  this.$node.mouseover(function(event) {
    var dancer = this;
    var deg = 0;
    
    setInterval(function() {
      deg += 30;
      $(dancer).css({
        '-webkit-transform': 'rotate('+deg+'deg)',
        '-moz-transform': 'rotate('+deg+'deg)',  
        '-ms-transform': 'rotate('+deg+'deg)',  
        '-o-transform': 'rotate('+deg+'deg)',  
        'transform': 'rotate('+deg+'deg)',  
        'zoom': 1
      });

    }, 10);

    setInterval(function() {
      var top = Math.random() * (500 - 350)  + 350;
      var left = Math.random() * 1000;
      context.setPosition(top, left);
    }, 500);

  });
};

Dancer.prototype.skins = [
  'dwarf_male',
  'gnome_male',
  'human_female',
  'troll_male',
  'undead_male',
];

Dancer.prototype.move = function () {

};

Dancer.prototype.setSkin = function () {
  var rand = Math.floor(Math.random() * this.skins.length - 1);
  this.$node.css('background', 'url("img/dancers/' + this.skins[rand] + '.gif") no-repeat');
};

Dancer.prototype.setPosition = function (top, left) {
  if (top <= 380) {
    this.$node.css({'background-size':'50%'});  
  }

  this.$node.animate({top:top, left:left}, 300);

  return this;
};

Dancer.prototype.rotate = function (dancer, deg) {
    $el.css({
      '-webkit-transform': 'rotate('+deg+'deg)',
      '-moz-transform': 'rotate('+deg+'deg)',  
      '-ms-transform': 'rotate('+deg+'deg)',  
      '-o-transform': 'rotate('+deg+'deg)',  
      'transform': 'rotate('+deg+'deg)',  
      'zoom': 1

    });
};
