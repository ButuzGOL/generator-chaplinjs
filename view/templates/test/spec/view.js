define([<% var fullName = (path ? (path.replace(/sub\//g, '').replace(/\/sub/g, '') + '/') : '') + name, extend = ((extend) ? extend : ''), classifyExtend = _.classify(extend); %>
], function() {
  'use strict';
  
  describe('<%= _.classify(fullName) %><%= classifyExtend %>View', function() {
  });
});