'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ChaplinjsGenerator = module.exports =
  function ChaplinjsGenerator(args, options) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
      this.installDependencies({ 
        skipInstall: options['skip-install'],
        callback: function () {
          this.spawnCommand('grunt', ['prepare']);
        }.bind(this)
      });
    });

    this.pkg = JSON.parse(
      this.readFileAsString(path.join(__dirname, '../package.json')));
  };

util.inherits(ChaplinjsGenerator, yeoman.generators.Base);

ChaplinjsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'appName',
    message: 'Application name',
    default: 'appName'
  }, {
    name: 'appTitle',
    message: 'Application title',
    default: 'Application Title'
  }];

  this.prompt(prompts, function(props) {
    this.appName = props.appName;
    this.githubUser = props.githubUser;
    this.appTitle = props.appTitle;
 
    cb();
  }.bind(this));
};

ChaplinjsGenerator.prototype.app = function app() {
  this.mkdir('src');

  this.directory('src/app', 'src/app');
  this.directory('src/vendor', 'src/vendor');
  this.directory('src/test', 'src/test');
  this.template('src/test/spec/index.html', 'src/test/spec/index.html');
  this.template('src/test/spec/coverage.html', 'src/test/spec/coverage.html');
  this.template('src/test/benchmark/index.html',
    'src/test/benchmark/index.html');
  
  this.template('src/index.html', 'src/index.html');
  this.template('src/app/config/application.js',
    'src/app/config/application.js');
  
  this.copy('Gruntfile.js', 'Gruntfile.js');
  
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.copy('_yuidoc.json', 'yuidoc.json');
};

ChaplinjsGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitattributes', '.gitattributes');
  this.copy('gitignore', '.gitignore');
};
