/**
 * <%= _.capitalize(name) %> controller module
 *
 * @module controllers/<%= name %>
 */
define([
  'controllers/base/controller'
], function(Controller) {
  'use strict';

  /**
   * <%= _.capitalize(name) %> controller class
   *
   * @class <%= _.capitalize(name) %>Controller
   * @constructor
   * @extends Controller
   */
  var <%= _.capitalize(name) %>Controller = Controller.extend({
  });
  
  return <%= _.capitalize(name) %>Controller;
});
