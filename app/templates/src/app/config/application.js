/**
 * Application config
 *
 * @module config/application
 */
define(function() {
  'use strict';

  return {
    title: '<%= appTitle %>',
    controllerSuffix: '',
    api: {
      root: 'http://localhost:3000'
    },
    locale: 'en'
  };
});