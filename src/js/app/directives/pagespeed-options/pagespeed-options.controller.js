;(function() {
    'use strict';

    angular.module('pagespeedApp').controller('pagespeedOptionsController', pagespeedOptionsController);

    pagespeedOptionsController.$inject = ['pagespeedApi'];

    function pagespeedOptionsController(pagespeedApi) {
        var vm = this;
        vm.options = pagespeedApi.options;
    }
})();