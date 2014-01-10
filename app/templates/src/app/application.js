/**
 * Provide application bootstrap
 *
 * @module application
 */
define([
  'underscore',
  'chaplin',
  'mediator',
  'config/application',
  'views/layout',
  'lib/error-handler',
  'lib/utils',

  'controllers/pages',
  'controllers/errors'
], function(_, Chaplin, mediator, applicationConfig, Layout, ErrorHandler) {
  'use strict';
  
  /**
   * Application bootstrap
   *
   * @class Application
   * @constructor
   * @extends Chaplin.Application
   */
  var Application = Chaplin.Application.extend({
    /**
     * Base title would be included in html head
     *
     * @property title
     * @type {string}
     */
    title: applicationConfig.title,
    /**
     * Runs on initialize
     * 1. Init error handler
     * 3. Init locale
     *
     * @method start
     * @see Chaplin.Application.start()
     */
    start: function() {
      this.initErrorHandler();

      Chaplin.Application.prototype.start.apply(this);
    },
    /**
     * Lock errorHandler then 
     * subscribing to messageView:ready and
     * on event unlock errorHandler and
     * if will have errors show them
     *
     * @method initErrorHandler
     * @async
     */
    initErrorHandler: function() {
      var _this = this,
          callback;
      
      mediator.errorHandler = new ErrorHandler();
      mediator.errorHandler.isLocked = true;

      callback = function() {
        _this.unsubscribeEvent('messagesView:ready', callback);

        mediator.errorHandler.isLocked = false;
        mediator.errorHandler.publishCurrentErrors();
      };

      this.subscribeEvent('messagesView:ready', callback);
    },
    /**
     * Initialize layout with options and this.title
     *
     * @method initLayout
     * @param {object} options - options for layout
     */
    initLayout: function(options) {
      this.layout = new Layout(_.defaults(options, { title: this.title }));
    },
    /**
     * Setting some params to mediator before freeze
     *
     * @method initMediator
     * @see Chaplin.Application.initMediator()
     */
    initMediator: function() {
      mediator.errorHandler = null;
      mediator.applicationError = false;
      
      Chaplin.Application.prototype.initMediator.call(this, arguments);
    }
  });

  return Application;
});
