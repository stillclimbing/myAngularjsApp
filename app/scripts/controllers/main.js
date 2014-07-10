'use strict';

/**
 * @ngdoc function
 * @name myAngularjsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularjsAppApp
 */
angular.module('myAngularjsAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
