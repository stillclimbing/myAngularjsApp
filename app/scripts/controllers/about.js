'use strict';

/**
 * @ngdoc function
 * @name myAngularjsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAngularjsAppApp
 */
angular.module('myAngularjsAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
