'use strict';

describe('Directive: wikipediaPanel', function () {

  // load the directive's module
  beforeEach(module('myAngularjsAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wikipedia-panel></wikipedia-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wikipediaPanel directive');
  }));
});
