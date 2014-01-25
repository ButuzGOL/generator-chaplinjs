/*jshint quotmark:false */

'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');

var ControllerGenerator = module.exports = function ControllerGenerator(args) {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.actions = args.splice(1);
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  var _this = this,
      routesFilePath,
      routesFile,
      insert = [],
      position,
      lastMatchItem;

  if (this.actions.length) {
    routesFilePath = 'src/app/config/routes.js';
    routesFile = this.readFileAsString(routesFilePath);
    
    this.actions.forEach(function(action) {
      var str = "match('" + _this.name + "/" + action + "', " +
        "'" + _this.name + "#" + action + "');";

      if (routesFile.indexOf(str) === -1) {
        insert.push(str);
      }
    });

    if (insert.length) {

      lastMatchItem = routesFile.match(/match\(.*?\);|match\) {/g).pop();
      position = routesFile.indexOf(lastMatchItem) + lastMatchItem.length;

      routesFile = [
        routesFile.slice(0, position),
        '\n    ' + insert.join('\n    '),
        routesFile.slice(position)
      ].join('');

      this.write(routesFilePath, routesFile);
    }
  }

  this.template('app/controller.js',
    'src/app/controllers/' + this.name + '.js');
  this.template('test/spec/controller.js',
    'src/test/spec/controllers/' + this.name + '.js');
};
