/* global angular, document, window */

var tubenoteApp = angular.module('tubenoteApp'); 
tubenoteApp.controller('TestController', function($scope, $http) {
	$scope.submitting = function($event) {
		console.log($event);
	};
});