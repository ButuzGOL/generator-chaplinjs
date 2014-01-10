/**
 * Application routes config
 *
 * @module config/routes
 */
define(function() {
  'use strict';

  return function(match) {
    match('', 'pages#home');
    
    match('404', 'errors#404');
    match('403', 'errors#403');
    match('500', 'errors#500');
  };
});