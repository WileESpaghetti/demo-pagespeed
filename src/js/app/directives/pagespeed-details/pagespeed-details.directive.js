(function() {
    'use strict';

    angular.module('pagespeedApp').directive('pagespeedDetails', pagespeedDetails);

    function pagespeedDetails() {
        return {
            bindToController: true,
            controller:       'pagespeedDetailsController',
            controllerAs:     'pagespeedDetailsCtrl',
            link:             link,
            require:          ['pagespeedDetails', '^pagespeedSummary'],
            restrict:         'E',
            scope:            {},
            templateUrl:      'js/app/directives/pagespeed-details/pagespeed-details.html',
        };

        function link(scope, element, attrs, ctrls) {
            var pagespeedDetails  = ctrls[0];
            var pagespeedSummary  = ctrls[1];
            pagespeedDetails.data = pagespeedSummary.data;
		}
    }
})();