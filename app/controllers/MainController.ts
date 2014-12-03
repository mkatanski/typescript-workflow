/*
 TypeScript module which contains controllers
*/
module Controllers{
	export class MainController{
		message = "Test message from MainController !!!";
		constructor($scope, logService:LogService){
			$scope.vm = this;
			logService.log('Message from MainController');
		}
	}
}