'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var TemplateGenerator = module.exports = function TemplateGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
  this.copy('template.ejs', 'src/app/views/templates/' + this.name + '.ejs');
};
