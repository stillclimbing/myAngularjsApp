'use strict';

/**
 * @ngdoc directive
 * @name myAngularjsAppApp.directive:wikipediaPanel
 * @description
 * # wikipediaPanel
 */
angular.module('myAngularjsAppApp')
    .directive('wikipediaPanel', function($resource) {
        return {
            template: '<div>{{page.title}}</div><div ng-bind-html="{{page.extract}}"></div>',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                var WikipediaPanelQuery = $resource('http://localhost:9010/stillclimbing/rest/wikipediaApi?title=' + attrs.title);
                WikipediaPanelQuery.get(function(result) {
                    angular.forEach(result.query.pages, function(page, key) {
                        scope.page = page;
                        element.html('<div class="panel panel-default"><div class="panel-heading">' + page.title + '<a href="http://en.wikipedia.org/wiki?curid=' + page.pageid + '" class="pull-right" target="_blank">wikipedia</a></div><div class="panel-body">' + page.extract + '</div></div>');
                        return false;
                    });
                });
                //query
                //http://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=emi

            }
        };
    });