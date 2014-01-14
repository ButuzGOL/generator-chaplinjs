/*jshint quotmark:false */

'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var StyleGenerator = module.exports = function StyleGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.option('path', {
    type: String
  });

  this.path = this.options.path;
};

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

StyleGenerator.prototype.files = function files() {
  var basePath = 'src/app/views/styles/',
      path = this.path ? (this.path + '/') : '',
      baseFilePath = basePath + 'application.styl',
      baseFile = this.readFileAsString(baseFilePath),
      insert = "@import '" + path + this.name + "'";
  
  if (baseFile.indexOf(insert) === -1) {
    this.write(baseFilePath, baseFile + '\n' + insert);
  }
  
  this.copy('style.styl', basePath + path + this.name + '.styl');
};
