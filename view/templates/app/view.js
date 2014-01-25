/**<% var fullName = (path ? (path.replace(/sub\//g, '').replace(/\/sub/g, '') + '/') : '') + name, classifyName = _.classify(fullName), capitalizeName = _.capitalize(fullName.replace(/\//g, ' ')), extend = ((extend) ? extend : ''), classifyExtend = _.classify(extend); %>
 * <%= capitalizeName %><%= (extend) ? ' ' + extend : '' %> view module
 *
 * @module views/<%= ((path) ? path + '/' : '') + name + ((extend) ? '-' + extend : '') %>
 */
define([
  'views/base/<%= (extend) ? extend : 'view' %>'<% if (all) { %>,<%= '\n  ' %>'text!views/templates/<%= ((path) ? path + '/' : '') + name + ((extend) ? '-' + extend : '') %>.ejs'<% } %>
], function(<%= _.classify(extend) %>View<% if (all) { %>, template<% } %>) {
  'use strict';

  /**
   * <%= capitalizeName %><%= (extend) ? ' ' + extend : '' %> view class
   *
   * @class <%= classifyName %><%= classifyExtend %>View
   * @constructor
   * @extends <%= classifyExtend %>View
   */
  var <%= classifyName %><%= classifyExtend %>View = <%= classifyExtend %>View.extend({<% if (all) { %><%= '\n    ' %>/**<%= '\n     ' %>* @property template<%= '\n     ' %>* @type {string}<%= '\n     ' %>*/<%= '\n    ' %>template: template<% } %>
  });
  
  return <%= classifyName %><%= classifyExtend %>View;
});
