'use strict';

/**
 * @ngdoc directive
 * @name myAngularjsAppApp.directive:tagCloud
 * @description
 * # tagCloud
 */
angular.module('myAngularjsAppApp')
  .directive('tagCloud', function () {
    return {
      templateUrl: 'scripts/directives/tagcloud.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the tagCloud directive');
      }
    };
  });
