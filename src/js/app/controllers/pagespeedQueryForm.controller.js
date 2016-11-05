(function() {
	'use strict';
	angular.module('pagespeedApp').controller('pagespeedQueryFormController', pagespeedQueryForm);

	pagespeedQueryForm.$inject = [];

	function pagespeedQueryForm() {
		var vm = this;

		vm.url = '';
		vm.submit = submit;

		function submit() {
			alert(this.url);
		}
	}
})();
