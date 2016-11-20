;(function() {
    'use strict';

    angular.module('pagespeedApp').directive('pagespeedOptions', pagespeedOptions);

    function pagespeedOptions() {
        return {
            bindToController: true,
            controller:       'pagespeedOptionsController',
            controllerAs:     'pagespeedOptionsCtrl',
            restrict:         'E',
            scope:            {},
            templateUrl:      'js/app/directives/pagespeed-options/pagespeed-options.html'
        };
    }
})();