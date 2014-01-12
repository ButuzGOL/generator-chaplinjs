/**<% var capitalizeName = _.capitalize(name), classifyName = _.classify(name); %>
 * <%= capitalizeName %> module
 *
 * @module models/<%= name %>
 */
define([
  'models/base/model',
  'models/base/collection'
], function(Model, Collection) {
  'use strict';

  /**
   * <%= capitalizeName %> class
   *
   * @class <%= classifyName %>
   * @constructor
   * @extends Collection
   */
  var <%= classifyName %> = Collection.extend({
    model: Model
  });
  
  return <%= classifyName %>;
});
