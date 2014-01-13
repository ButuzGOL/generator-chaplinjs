'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.argument('path', {
    type: String,
    required: false
  });

  this.argument('extend', {
    type: String,
    required: false
  });
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  var path = this.path ? (this.path + '/') : '';
  
  this.template('app/view.js', 'src/app/views/' + path + this.name + '.js');
  this.template('test/spec/view.js',
    'src/test/spec/views/' + path + this.name + '.js');
};
