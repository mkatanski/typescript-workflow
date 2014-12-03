/// <reference path="../reference.ts" />

directives.directive('newdirective', function():ng.IDirective{
	return {
		restrict: "EAC",
		template: '<div>New Directive message</div>'
	}
})