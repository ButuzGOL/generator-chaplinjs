
require.config({
  deps: (typeof window !== 'undefined' && window.mocha) ?
    ['../test/spec/initialize'] :
    ((typeof window !== 'undefined' && window.Benchmark) ?
      ['../test/benchmark/initialize'] : ['initialize']),
  baseUrl: (typeof window !== 'undefined' &&
    (window.mocha || window.Benchmark)) ? '../../app/' : 'app/',
  paths: {
    backbone: '../bower_components/backbone/backbone',
    chaplin: '../bower_components/chaplin/chaplin',
    expect: '../bower_components/expect/expect',
    jquery: '../bower_components/jquery/jquery',
    underscore: '../bower_components/lodash/dist/lodash.compat',
    text: '../bower_components/requirejs-text/text',
    ejs: '../bower_components/ejs/ejs'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    nprogress: {
      deps: ['jquery']
    },
    expect: {
      exports: 'expect'
    },
    ejs: {
      exports: 'ejs'
    }
  }
});