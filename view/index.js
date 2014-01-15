'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.option('path', {
    type: String
  });

  this.option('extend', {
    type: String
  });

  this.option('all');

  this.path = this.options.path;
  this.extend = this.options.extend;
  this.all = this.options.all;

  if (this.all) {
    this.hookFor('chaplinjs:template', {
      args: [this.name + ((this.extend) ? '-' + this.extend : '')],
      options: {
        options: {
          'path': this.path
        }
      }
    });

    this.hookFor('chaplinjs:style', {
      args: [this.name + ((this.extend) ? '-' + this.extend : '')],
      options: {
        options: {
          'path': this.path
        }
      }
    });
  }
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  var path = this.path ? (this.path + '/') : '',
      filePathName = path + this.name +
        ((this.extend) ? '-' + this.extend : '');
  
  this.template('app/view.js', 'src/app/views/' + filePathName + '.js');
  this.template('test/spec/view.js',
    'src/test/spec/views/' + filePathName + '.js');
};
