'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.files = function files() {
  this.copy('app/collection.js', 'src/app/models/' + this.name + '.js');
  this.copy('test/spec/collection.js',
    'src/test/spec/models/' + this.name + '.js');
};
