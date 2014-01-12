'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.argument('extend', {
    type: String,
    required: false
  });

  this.option('full');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  this.template('app/view.js', 'src/app/views/' + this.name + '.js');
  this.copy('test/spec/view.js',
    'src/test/spec/views/' + this.name + '.js');
  
  if (this.options['create-all']) {
    
  }
};
