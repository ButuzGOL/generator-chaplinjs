/**
 * View module
 *
 * @module views/base/view
 */
define([
  'require',
  'underscore',
  'ejs',
  'chaplin',
  'mediator',
  'helpers/application'
], function(require, _, ejs, Chaplin, mediator) {
  'use strict';

  /**
   * Base view class
   *
   * @class View
   * @constructor
   * @extends Chaplin.View
   */
  var View = Chaplin.View.extend({

    /**
     * Returning function for render template
     *
     * @method getTemplateFunction
     * @return {function}
     */
    getTemplateFunction: function() {
      var template = this.template,
          templateFunc = null;

      if (_.isString(template)) {
        templateFunc = ejs.compile(template);
      } else {
        templateFunc = template;
      }

      return templateFunc;
    },

    /**
     * Returning object for template with additional data
     * (currentUser, helpers and libs)
     *
     * @method getTemplateFunction
     * @see Chaplin.View.getTemplateData()
     * @return {object} with data
     */
    getTemplateData: function() {
      var object = Chaplin.View.prototype.getTemplateData.
        apply(this, arguments);
      
      if (mediator.user) {
        object.currentUser = mediator.user.serialize();
      }
      
      return _.defaults(object,
        { _: _ },
        require('helpers/application')
      );
    }
  });

  return View;
});
