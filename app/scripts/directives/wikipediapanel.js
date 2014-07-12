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
            restrict: 'A',
            templateUrl: 'scripts/directives/wikipediapanel.html',
            scope: true,
            link: function postLink(scope, element, attrs) {
                var qLang = attrs.lang || 'en';
                var WikipediaPanelQuery = $resource('http://localhost:9010/stillclimbing/rest/wikipediaPage?lang=' + qLang + '&title=' + attrs.title);
                WikipediaPanelQuery.get(function(result) {
                    angular.forEach(result.query.pages, function(page, key) {
                        scope.page = page;
                        element.find(".wikipedia-panel-body").html(page.extract);
                        return false;
                    });
                    if (!scope.page.pageid) { //if no result is found, try search
                        var WikipediaPanelSearch = $resource('http://localhost:9010/stillclimbing/rest/wikipediaSearch?lang=' + qLang + '&title=' + attrs.title);
                        WikipediaPanelSearch.get(function(result) {
                            scope.pages = result.query.pages;
                        });

                    }
                });
                //query
                //http://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=emi

            }
        };
    });
