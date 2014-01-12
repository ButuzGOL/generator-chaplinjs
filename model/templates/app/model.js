/**<% var capitalizeName = _.capitalize(name), classifyName = _.classify(name); %>
 * <%= capitalizeName %> module
 *
 * @module models/<%= name %>
 */
define([
  'models/base/model'
], function(Model) {
  'use strict';

  /**
   * <%= capitalizeName %> class
   *
   * @class <%= classifyName %>
   * @constructor
   * @extends Model
   */
  var <%= classifyName %> = Model.extend({
  });
  
  return <%= classifyName %>;
});
