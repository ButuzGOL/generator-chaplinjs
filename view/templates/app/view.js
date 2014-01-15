/**<% var fullName = (path ? (path.replace(/sub\//g, '').replace(/\/sub/g, '') + '/') : '') + name, classifyName = _.classify(fullName), capitalizeName = _.capitalize(fullName.replace(/\//g, ' ')), extend = ((extend) ? extend : ''), classifyExtend = _.classify(extend); %>
 * <%= capitalizeName %><%= (extend) ? ' ' + extend : '' %> view module
 *
 * @module views/<%= ((path) ? path + '/' : '') + name + ((extend) ? '-' + extend : '') %>
 */
define([
  'views/base/<%= (extend) ? extend : 'view' %>'<% if (all) { %>,<%= '\n\t' %>'text!views/templates/<%= ((path) ? path + '/' : '') + name + ((extend) ? '-' + extend : '') %>.ejs'<% } %>
], function(<%= _.classify(extend) %>View<% if (all) { %>, template<% } %>) {
  'use strict';

  /**
   * <%= capitalizeName %><%= (extend) ? ' ' + extend : '' %> view class
   *
   * @class <%= classifyName %><%= classifyExtend %>View
   * @constructor
   * @extends <%= classifyExtend %>View
   */
  var <%= classifyName %><%= classifyExtend %>View = <%= classifyExtend %>View.extend({<% if (all) { %><%= '\n\t\t' %>/**<%= '\n\t\t ' %>* @property template<%= '\n\t\t ' %>* @type {string}<%= '\n\t\t ' %>*/<%= '\n\t\t' %>tempate: template<% } %>
  });
  
  return <%= classifyName %><%= classifyExtend %>View;
});
