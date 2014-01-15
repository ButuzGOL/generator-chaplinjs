'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator'),
    _ = require('lodash');

_.mixin(require('underscore.inflections'));

var AllGenerator = module.exports = function AllGenerator(args) {
  var modelName;

  yeoman.generators.NamedBase.apply(this, arguments);

  this.argument('action', {
    required: true
  });

  this.action = args[1];

  modelName = _.singularize(this.name);

  this.hookFor('chaplinjs:controller', {
    args: args
  });

  this.hookFor('chaplinjs:helper', {
    args: args
  });

  this.hookFor('chaplinjs:model', {
    args: [modelName]
  });

  this.hookFor('chaplinjs:collection', {
    args: args,
    options: {
      options: {
        'model': modelName
      }
    }
  });

  this.hookFor('chaplinjs:view', {
    args: this.action,
    options: {
      options: {
        'path': this.name,
        'extend': 'page',
        'all': true
      }
    }
  });
};

util.inherits(AllGenerator, yeoman.generators.NamedBase);