'use strict';

angular.module('amsApp').controller('BillManagerController', ['$scope','$http', 'asyncBills','asyncservicePlanView','BillManagerService', function($scope, $http,asyncBills,asyncservicePlanView,BillManagerService) {
	var self = this;
	var REST_SERVICE_URI = 'http://localhost:8080/AMSAAS/AMS-REST/';
	var r = "";
	$scope.ctrlbills=asyncBills;
	$scope.servicePlanView=asyncservicePlanView;
	
	$scope.bill = {
		billDate : "",
		billDueDate : "",
		billPeriodFromDate : "",
		billPeriodToDate : "",
		billLineItems : [{
			billItemAmount : "",
			billItemQuantity : "",
			billItemService : {srvcCode : ""}
		}],
		billTotalAmount : 0,
		customerId : 0
	};
	
	$scope.billCustomer = { 
	 	persnFirstName 	:"test",
	 	persnLastName	:""
	};
	$scope.selectedSrvc={
			srvcPlanName:""
	};

	$scope.service={
			
	};
	
	$scope.srvcSelect =  function(){
		//alert("Selected"+$scope.selectedSrvc.srvcPlanName);
		var x=$scope.servicePlanView.data[0];
		var i;
		for(i=0;i<1;i++){
			if($scope.selectedSrvc.srvcPlanName == $scope.servicePlanView.data[0].srvcPlanName){
				$scope.service=$scope.servicePlanView.data[0].serviceRateSet[0];
				//console.log("sel "+JSON.stringify($scope.service));
			}
		}
	};

	$scope.addItem = function(){
		$scope.bill.billLineItems.push({
			billItemAmount : "",
			billItemQuantity : "",
			billItemService : {srvcCode : ""}
		});
		var i=0;
		$scope.bill.billTotalAmount=0;
		for(i=0;i<$scope.bill.billLineItems.length;i++){
			console.log($scope.bill.billLineItems[i].subTotal);
			console.log($scope.bill.billLineItems[i].quantity);
			$scope.bill.billTotalAmount=+$scope.bill.billTotalAmount + +$scope.bill.billLineItems[i].billItemAmount;
		}
	};
	$scope.removeBillItem = function(item) {
		var index = $scope.bill.billLineItems.indexOf(item);
		$scope.bill.billLineItems.splice(index, 1); 
	};

	$scope.getCustomerData = function(){
		BillManagerService.getUserByFlatNum(self.bill.persnFlatNum).then(function(response) {
			$scope.billCustomer = response.data;
			$scope.bill.customerId = $scope.billCustomer.persnId;
	    });
	};

	$scope.createBill = function(){
		BillManagerService.persistBill($scope.bill);
	};	
}]);


