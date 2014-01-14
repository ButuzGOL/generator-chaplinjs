'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var ControllerGenerator = module.exports = function ControllerGenerator(args) {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.actions = args.splice(1);
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  this.template('app/controller.js',
    'src/app/controllers/' + this.name + '.js');
  this.template('test/spec/controller.js',
    'src/test/spec/controllers/' + this.name + '.js');
};
