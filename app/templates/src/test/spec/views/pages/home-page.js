define([
  'expect',
  'chaplin',
  'views/layout',
  'views/site',
  'views/base/page',
  'views/pages/home-page'
], function(expect, Chaplin, Layout, SiteView, PageView,
  PagesHomePageView) {
  'use strict';
  
  describe('PagesHomePageView', function() {
    var layout,
        siteView,
        pagesHomePageView;

    beforeEach(function() {
      layout = new Layout();
      siteView = new SiteView();
    });
    afterEach(function() {
      if (pagesHomePageView) {
        pagesHomePageView.dispose();
      }
      siteView.dispose();
      layout.dispose();
    });

    describe('#template', function() {
      it('should render template', function() {
        PagesHomePageView.prototype.autoRender = false;
        pagesHomePageView = new PagesHomePageView();
        PagesHomePageView.prototype.autoRender = true;
        
        expect(pagesHomePageView.template).
          to.be(require('text!views/templates/pages/home-page.ejs'));
      });
    });
    describe('#autoRender', function() {
      it('should be auto render', function() {
        expect(PagesHomePageView.prototype.autoRender).to.be(true);
      });
    });
  });
});