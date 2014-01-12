/**<% var classifyName = _.classify(name.replace(/sub\//g, '')), capitalizeName = _.capitalize(name.replace(/sub\//g, '').replace(/\//g, ' ')), extend = ((extend) ? extend : ''), classifyExtend = _.classify(extend); %>
 * <%= capitalizeName %><%= (extend) ? ' ' + extend : '' %> view module
 *
 * @module views/<%= name %>
 */
define([
  'views/base/<%= (extend) ? extend : 'view' %>'
], function(<%= _.classify(extend) %>View) {
  'use strict';

  /**
   * <%= capitalizeName %><%= (extend) ? ' ' + extend : '' %> view class
   *
   * @class <%= classifyName %><%= classifyExtend %>View
   * @constructor
   * @extends <%= classifyExtend %>View
   */
  var <%= classifyName %><%= classifyExtend %>View = <%= classifyExtend %>View.extend({
  });
  
  return <%= classifyName %><%= classifyExtend %>View;
});
