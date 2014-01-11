/**
 * <%= _.capitalize(name) %> module
 *
 * @module models/<%= name %>
 */
define([
  'models/base/model',
  'models/base/collection'
], function(Model, Collection) {
  'use strict';

  /**
   * <%= _.capitalize(name) %> class
   *
   * @class <%= _.capitalize(name) %>
   * @constructor
   * @extends Collection
   */
  var <%= _.capitalize(name) %> = Collection.extend({
    model: Model
  });
  
  return <%= _.capitalize(name) %>;
});
