(function() {
	angular.module('public')
	.controller('myInfoController',myInfoController);

	myInfoController.$inject = ['registerService']
	function myInfoController(registerService){
		var ctrl = this;
		var temp = registerService.getUser();
		ctrl.user = temp.user;
		ctrl.item = temp.item;
		if(temp.user===undefined){
			ctrl.empty = true;
		}
		else{
			ctrl.empty = false;
		}
		console.log(ctrl.empty);
	}
})();