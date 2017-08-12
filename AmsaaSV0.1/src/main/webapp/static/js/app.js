'use strict';

var App = angular.module('amsApp',['ngMaterial','ngRoute','md.data.table']);


App.config(['$routeProvider', function ($routeProvider){
	$routeProvider
		.when('/',
			{
				controller: 'UserController as uc',
				templateUrl: 'static/view/usermanager.html',
				resolve: {
	                async: ['UserService', function(UserService) {
	                    return UserService.getAllUserList();
	               	}]
	            }
			})
		.when('/test',
			{
				controller: 'UserController as uc',
				templateUrl: 'static/view/userprofile.html'
			})
		.when('/billpayments',
			{
				controller: 'BillManagerController as bc',
				templateUrl: 'static/view/billdashboard.html',
				resolve: {
	                asyncBills: ['BillManagerService', function(BillManagerService) {
	                    return BillManagerService.getAllBillList();
	               	}],
	               	asyncservicePlanView: ['BillManagerService', function(BillManagerService) {
	                    return BillManagerService.getAllServicePlanList();
	               	}]
				}
			})			
		.otherwise({redirectTo: '/'});
}]);
