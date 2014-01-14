/**<% var capitalizeName = _.capitalize(name), classifyName = _.classify(name); %>
 * <%= capitalizeName %> controller module
 *
 * @module controllers/<%= name %>
 */
define([
  'controllers/base/controller'
], function(Controller) {
  'use strict';

  /**
   * <%= capitalizeName %> controller class
   *
   * @class <%= classifyName %>Controller
   * @constructor
   * @extends Controller
   */
  var <%= classifyName %>Controller = Controller.extend({<% _.forEach(actions, function(action, index) { %>
    /**
     * @method <%= action %>
     */
    <%= action %>: function() {
    }<% if ((index + 1) < actions.length) { %>,<% } %><% }); %>
  });
  
  return <%= classifyName %>Controller;
});
