/**
 * <%= _.capitalize(name.replace(/sub\//g, '').replace(/\//g, ' ')) %> view module
 *
 * @module views/<%= name %>
 */
define([
  'views/base/view'
], function(View) {
  'use strict';

  /**
   * <%= _.capitalize(name.replace(/sub\//g, '').replace(/\//g, ' ')) %> view class
   *
   * @class <%= _.classify(name.replace(/sub\//g, '')) %>View
   * @constructor
   * @extends View
   */
  var <%= _.classify(name.replace(/sub\//g, '')) %>View = View.extend({
  });
  
  return <%= _.classify(name.replace(/sub\//g, '')) %>View;
});
