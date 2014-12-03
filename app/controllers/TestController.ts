/*
 TypeScript module which contains controllers
*/
module Controllers {
	export class TestController{
		message = "Hello from TestController";

		constructor($scope) {
			$scope.vm = this;
		}
	}
}