define([<% var fullName = (path ? (path.replace(/sub\//g, '') + '/') : '') + name; %>
], function() {
  'use strict';
  
  describe('<%= _.classify(fullName) %>View', function() {
  });
});