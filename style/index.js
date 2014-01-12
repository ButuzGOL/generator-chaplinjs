'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var StyleGenerator = module.exports = function StyleGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

StyleGenerator.prototype.files = function files() {
  this.copy('style.styl', 'src/app/views/styles/' + this.name + '.styl');
};
