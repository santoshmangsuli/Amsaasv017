'use strict';

angular.module('amsApp').factory('BillManagerService',['$http','$q',function($http, $q){
	
	return {
		getAllBillList: function() {
			return $http.get('http://localhost:8080/AMSAAS/AMS-REST/BillDetails')
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				return response.data;
				
		    },
		    function(errResponse){
		        console.error('Error while fetching Users');
		        return $q.reject(errResponse);
		    });
		},
		
		persistBill : function(billDTO) {
			//console.log("persistBill "+billDTO);
			$http.post('http://localhost:8080/AMSAAS/AMS-REST/Bill',billDTO);
		},
		getUserByFlatNum : function(persnFlatNum){
			console.log("persnId "+JSON.stringify(persnFlatNum));
			return $http.post('http://localhost:8080/AMSAAS/AMS-REST/user/flatNum/'+persnFlatNum);
		},
		getAllServicePlanList : function() {
			console.log("getAllServicePlanList");
			return $http.get('http://localhost:8080/AMSAAS/AMS-REST/serviceplans'); 
		}

	};
}]);