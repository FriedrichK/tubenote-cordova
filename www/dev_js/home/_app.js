/* global angular */
var tubenoteApp = angular.module('tubenoteApp', [])
	.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
	}]);