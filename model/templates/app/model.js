/**
 * <%= _.capitalize(name) %> module
 *
 * @module models/<%= name %>
 */
define([
  'models/base/model'
], function(Model) {
  'use strict';

  /**
   * <%= _.capitalize(name) %> class
   *
   * @class <%= _.capitalize(name) %>
   * @constructor
   * @extends Model
   */
  var <%= _.capitalize(name) %> = Model.extend({
  });
  
  return <%= _.capitalize(name) %>;
});
