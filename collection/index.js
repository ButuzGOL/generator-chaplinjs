'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.option('model', {
    type: String
  });

  this.model = this.options.model;
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.files = function files() {
  this.template('app/collection.js', 'src/app/models/' + this.name + '.js');
  this.template('test/spec/collection.js',
    'src/test/spec/models/' + this.name + '.js');
};
