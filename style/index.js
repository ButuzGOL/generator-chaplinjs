'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var StyleGenerator = module.exports = function StyleGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.option('path', {
    type: String
  });

  this.path = this.options.path;
};

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

StyleGenerator.prototype.files = function files() {
  var path = this.path ? (this.path + '/') : '';
  
  this.copy('style.styl', 'src/app/views/styles/' + path + this.name + '.styl');
};
