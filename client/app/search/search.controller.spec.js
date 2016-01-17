'use strict';

describe('Controller: SearchController', function() {

  // load the controller's module
  beforeEach(module('heartApp'));
  beforeEach(module('stateMock'));

  var scope;
  var MainController;
  var state;
  var $httpBackend;
  var response = {
    '/api/artists': {
      code: 'ok',
      body: {
        artists: [
          {id: 1, name: 'Doron'},
          {id: 2, name: 'Segal'}
        ]
      }
    }
  };
  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/artists')
      .respond(response['/api/artists']);

    scope = $rootScope.$new();
    state = $state;
    MainController = $controller('SearchController', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
    $httpBackend.flush();
    expect(MainController.awesomeThings.length).to.equal(4);
  });
});
