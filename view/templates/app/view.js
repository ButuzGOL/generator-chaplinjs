/**<% var fullName = (path ? (path.replace(/sub\//g, '').replace(/\/sub/g, '') + '/') : '') + name, classifyName = _.classify(fullName), capitalizeName = _.capitalize(fullName.replace(/\//g, ' ')), extend = ((extend) ? extend : ''), classifyExtend = _.classify(extend); %>
 * <%= capitalizeName %><%= (extend) ? ' ' + extend : '' %> view module
 *
 * @module views/<%= fullName + ((extend) ? '-' + extend : '') %>
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
