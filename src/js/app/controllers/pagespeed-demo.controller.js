(function() {
	'use strict';
	angular.module('pagespeedApp').controller('pagespeedDemoController', pagespeedDemoController);

	pagespeedDemoController.$inject = ['pagespeedApi'];

	function pagespeedDemoController(pagespeedApi) {
		var vm = this;

		vm.pagespeed = pagespeedApi.latest;
	}
})();
