define([
  'expect',
  'underscore',
  'jquery',
  'chaplin',
  'application',
  'config/application',
  'mediator',
  'lib/error-handler',
], function(expect, _, $, Chaplin, Application, applicationConfig, mediator,
  ErrorHandler) {
  'use strict';
  
  describe('Application', function() {
    describe('#title', function() {
      it('should be application config title', function() {
        expect(Application.prototype.title).to.be(applicationConfig.title);
      });
    });
    describe('#start()', function() {
      var initErrorHandler = Application.prototype.initErrorHandler;

      before(function() {
        Application.prototype.initErrorHandler = function() {};
      });
      after(function() {
        Application.prototype.initErrorHandler = initErrorHandler;
      });
      beforeEach(function() {
        Chaplin.Application.prototype.start = function() {};
      });
      it('should call #initErrorHandler()', function(done) {
        var initErrorHandler = Application.prototype.initErrorHandler;

        Application.prototype.initErrorHandler = function() {

          Application.prototype.initErrorHandler = initErrorHandler;
          done();
        };

        Application.prototype.start();
      });
    });
    describe('#initErrorHandler()', function() {
      afterEach(function() {
        Chaplin.mediator.unsubscribe('messagesView:ready');
      });
      it('should set mediator error handler with ErrorHandler', function() {
        Application.prototype.initErrorHandler();
        expect(mediator.errorHandler).to.be.a(ErrorHandler);
      });
      it('should set mediator error handler locked', function() {
        Application.prototype.initErrorHandler();
        expect(mediator.errorHandler.isLocked).to.be(true);
      });
      describe('subscribe to messagesView:ready and call callback', function() {
        it('should subscribe to event', function() {
          Application.prototype.initErrorHandler();
          expect(Chaplin.mediator._events['messagesView:ready']).to.have.
            length(1);
        });
        context('when callback', function() {
          it('should unsubscribe to event', function() {
            Application.prototype.initErrorHandler();
            Chaplin.mediator.publish('messagesView:ready');
            expect(Chaplin.mediator._events['messagesView:ready']).to.
              be(undefined);
          });
          it('should set mediator error handler unlocked', function() {
            Application.prototype.initErrorHandler();
            Chaplin.mediator.publish('messagesView:ready');
            expect(mediator.errorHandler.isLocked).to.be(false);
          });
          it('should call error handler #publishCurrentErrors()',
            function(done) {
              var publishCurrentErrors = ErrorHandler.prototype.
                publishCurrentErrors;

              ErrorHandler.prototype.publishCurrentErrors = function() {
                ErrorHandler.prototype.publishCurrentErrors =
                  publishCurrentErrors;

                done();
              };

              Application.prototype.initErrorHandler();
              Chaplin.mediator.publish('messagesView:ready');
            }
          );
        });
      });
    });
    describe('#initLayout()', function() {
      it('should create layout with attributes', function() {
        var object = {
          title: 'Test'
        };
        
        Application.prototype.initLayout.call(object, {});
        
        expect(object.layout.title).to.be(object.title);
      });
    });
    describe('#initMediator()', function() {
      it('should set attributes', function() {
        Application.prototype.initMediator();

        expect(mediator.errorHandler).to.be(null);
        expect(mediator.applicationError).to.be(false);
      });
      it('should call parent', function(done) {
        var initMediator = Chaplin.Application.prototype.initMediator;
        Chaplin.Application.prototype.initMediator = function() {
          Chaplin.Application.prototype.initMediator = initMediator;

          done();
        };

        Application.prototype.initMediator();
      });
    });
  });
});