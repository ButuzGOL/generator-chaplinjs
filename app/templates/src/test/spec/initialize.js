require([
  '../test/spec/lib/error-handler',
  '../test/spec/lib/utils',
  
  '../test/spec/helpers/application',

  '../test/spec/application',
  '../test/spec/mediator',

  '../test/spec/controllers/base/controller',
  '../test/spec/controllers/pages',
  '../test/spec/controllers/errors',
  
  '../test/spec/models/base/model',
  '../test/spec/models/base/collection',

  '../test/spec/views/layout',
  '../test/spec/views/base/view',
  '../test/spec/views/base/collection',
  '../test/spec/views/base/page',
  '../test/spec/views/base/form',
  '../test/spec/views/site',
  '../test/spec/views/header',
  '../test/spec/views/footer',
  '../test/spec/views/messages',
  '../test/spec/views/errors/403-page',
  '../test/spec/views/errors/404-page',
  '../test/spec/views/errors/500-page',
  '../test/spec/views/pages/home-page'
], function() {
  'use strict';
  
  if (window.mochaPhantomJS) {
    window.mochaPhantomJS.run();
  } else {
    window.mocha.run();
  }
});