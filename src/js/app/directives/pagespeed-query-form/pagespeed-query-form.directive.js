(function() {
    'use strict';

    angular.module('pagespeedApp').directive('pagespeedQueryForm', pagespeedQueryForm);

    function pagespeedQueryForm() {
        return {
            templateUrl: 'js/app/directives/pagespeed-query-form/pagespeed-query-form.html',
            restrict: 'E',
            scope: {},
            controller: 'pagespeedQueryFormController',
            controllerAs: 'pagespeedQueryFormCtrl',
            bindToController: true
        };
    }
})();