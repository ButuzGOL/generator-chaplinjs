'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var HelperGenerator = module.exports = function HelperGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(HelperGenerator, yeoman.generators.NamedBase);

HelperGenerator.prototype.files = function files() {
  this.template('app/helper.js', 'src/app/helpers/' + this.name + '.js');
  this.template('test/spec/helper.js',
    'src/test/spec/helpers/' + this.name + '.js');
};
