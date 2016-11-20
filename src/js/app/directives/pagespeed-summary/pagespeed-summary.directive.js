(function() {
    'use strict';

    angular.module('pagespeedApp').directive('pagespeedSummary', pagespeedSummary);

    function pagespeedSummary() {
        return {
            templateUrl: 'js/app/directives/pagespeed-summary/pagespeed-summary.html',
            restrict: 'E',
            scope: {
                host: '='
            },
            controller: 'pagespeedSummaryController',
            controllerAs: 'summary',
            bindToController: true
        };
    }
})();