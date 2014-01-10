/**
 * Home page module
 *
 * @module views/pages/home-page
 */
define([
  'views/base/page',
  'text!views/templates/pages/home-page.ejs'
], function(PageView, template) {
  'use strict';

  /**
   *  Home page view class
   *
   * @class PagesHomePageView
   * @constructor
   * @extends PageView
   */
  var PagesHomePageView = PageView.extend({
    /** 
     * @property id
     * @type {string}
     */
    id: 'pages-home-page',
    /** 
     * @property autoRender
     * @type {boolean}
     */
    autoRender: true,
    /** 
     * @property template
     * @type {string}
     */
    template: template
  });

  return PagesHomePageView;
});
