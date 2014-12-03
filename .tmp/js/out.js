var services = angular.module('services', []);
var directives = angular.module('directives', []);
var Controllers;
(function (Controllers) {
    var MainController = (function () {
        function MainController($scope, logService) {
            this.message = "Test message from MainController !!!";
            $scope.vm = this;
            logService.log('Message from MainController');
        }
        return MainController;
    })();
    Controllers.MainController = MainController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var TestController = (function () {
        function TestController($scope) {
            this.message = "Hello from TestController";
            $scope.vm = this;
        }
        return TestController;
    })();
    Controllers.TestController = TestController;
})(Controllers || (Controllers = {}));
directives.directive('newdirective', function () {
    return {
        restrict: "EAC",
        template: '<div>New Directive message</div>'
    };
});
var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.log = function (msg) {
        console.log(msg);
    };
    return LogService;
})();

services.service('logService', LogService);
angular.module('controllers', []).controller(Controllers);
angular.module('testApp', ['controllers', 'services', 'directives']);
//# sourceMappingURL=out.js.map
