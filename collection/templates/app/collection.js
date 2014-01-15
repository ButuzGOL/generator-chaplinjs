/**<% var capitalizeName = _.capitalize(name), classifyName = _.classify(name); %>
 * <%= capitalizeName %> module
 *
 * @module models/<%= name %>
 */
define([
  'models/base/<%= (model) ? model : 'model' %>',
  'models/base/collection'
], function(<%= (model) ? _.classify(model) : 'Model' %>, Collection) {
  'use strict';

  /**
   * <%= capitalizeName %> class
   *
   * @class <%= classifyName %>
   * @constructor
   * @extends Collection
   */
  var <%= classifyName %> = Collection.extend({
    model: <%= (model) ? _.classify(model) : 'Model' %>
  });
  
  return <%= classifyName %>;
});
