'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('reflectionsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('AngStudiesCtrl', {
      $scope: scope
    });
  }));
//To test initially there will be 3 players initially
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.players.length).toBe(3);
  });
//Check addPlayers is working properly
  it('should add items to the list', function () {
    scope.player = 'Mohit Sharma';
    scope.addPlayers();
    expect(scope.players.length).toBe(4);
  });

  it('should add then remove an item from the list', function () {
      scope.player = 'Ms Dhoni';
    scope.addPlayers();
    scope.removePlayer(0);
    expect(scope.players.length).toBe(3);
  });
});
