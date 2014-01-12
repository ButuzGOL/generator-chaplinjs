'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var ControllerGenerator = module.exports = function ControllerGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  this.copy('app/controller.js', 'src/app/controllers/' + this.name + '.js');
  this.copy('test/spec/controller.js',
    'src/test/spec/controllers/' + this.name + '.js');
};
