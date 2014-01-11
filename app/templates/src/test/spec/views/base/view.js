define([
  'expect',

  'underscore',
  'chaplin',

  'views/base/view'
], function(expect, _, Chaplin, View) {
  'use strict';
  
  describe('View', function() {
    var view;

    beforeEach(function() {
      view = new View();
    });
    afterEach(function() {
      view.dispose();
    });

    describe('#getTemplateFunction()', function() {
      it('should return ejs compile function if template string', function() {
        view.template = 'Test';
        expect(view.getTemplateFunction()).to.be.an('function');
      });
      it('should return template if template not string', function() {
        view.template = function() {};
        expect(view.getTemplateFunction()).to.be(view.template);
      });
    });

    describe('#getTemplateData()', function() {
      it('should collect template data', function() {
        var object = Chaplin.View.prototype.getTemplateData();

        expect(view.getTemplateData()).to.eql(_.defaults(object,
          { _: _ },
          require('helpers/application')
        ));
      });
    });
  });
});