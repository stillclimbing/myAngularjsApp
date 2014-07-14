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
                var WikipediaPanelQuery = $resource('http://localhost:9010/stillclimbing/rest/wikipediaPage?lang=' + qLang + '&titles=' + attrs.titles);
                WikipediaPanelQuery.get(function(result) {
                    scope.pages = result.query.pages;
                    var firstPage;
                    angular.forEach(result.query.pages, function(page, key) {
                        firstPage = page;
                        return false;
                        //element.find(".wikipedia-panel-body").html(page.extract);
                        //return false;
                    });
                    if (!firstPage.pageid) { //if no result is found, try search
                        var WikipediaPanelSearch = $resource('http://localhost:9010/stillclimbing/rest/wikipediaSearch?lang=' + qLang + '&titles' + attrs.titles);
                        WikipediaPanelSearch.get(function(result) {
                            scope.altPages = result.query.pages;
                        });

                    }
                });
                //query
                //http://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=emi

            }
        };
    });