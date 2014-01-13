'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var TemplateGenerator = module.exports = function TemplateGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.option('path', {
    type: String
  });

  this.path = this.options.path;
};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
  var path = this.path ? (this.path + '/') : '';

  this.copy('template.ejs',
    'src/app/views/templates/' + path + this.name + '.ejs');
};
