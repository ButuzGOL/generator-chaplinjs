'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files() {
  this.template('app/model.js', 'src/app/models/' + this.name + '.js');
  this.template('test/spec/model.js',
    'src/test/spec/models/' + this.name + '.js');
};
