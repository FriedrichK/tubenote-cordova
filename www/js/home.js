/* global angular */
var tubenoteApp = angular.module('tubenoteApp', [])
	.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
	}]);
/* global angular, document, window */

var tubenoteApp = angular.module('tubenoteApp'); 
tubenoteApp.controller('TestController', function($scope, $http) {
	$scope.submitting = function($event) {
		console.log($event);
	};
});