(function() {
    'use strict';

    angular.module('pagespeedApp').controller('pagespeedSummaryController', pagespeedSummaryController);

    pagespeedSummaryController.$inject = ['pagespeedApi'];

    function pagespeedSummaryController(pagespeedApi) {
	    var vm = this;

	    vm.pagespeed = pagespeedApi.cache[vm.host];

	    init();

	    function init() {
		    vm.screenshot = vm.pagespeed.screenshot ? 'data:' + vm.pagespeed.screenshot.mime_type + ';base64,' + vm.pagespeed.screenshot.data.replace(/_/g,'/').replace(/-/g,'+') : 'http://placehold.it/320x240';
	    }
    }
})();