(function() {
    'use strict';

    angular.module('pagespeedApp').directive('pagespeedSummary', pagespeedSummary);

    function pagespeedSummary() {
        return {
            templateUrl: 'js/app/directives/pagespeed-summary/pagespeed-summary.html',
            restrict: 'E',
            scope: {
                data: '='
            },
            controller: 'pagespeedSummaryController',
            controllerAs: 'pagespeedSummaryCtrl',
            bindToController: true
        };
    }
})();