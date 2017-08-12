'use strict';

angular.module('amsApp').factory('UserService',['$http','$q',function($http, $q){
	
	return {
		getAllUserList: function() {
			return $http.get('http://localhost:8080/AMSAAS/AMS-REST/users')
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				return response.data;
				
		    },
		    function(errResponse){
		        console.error('Error while fetching Users');
		        return $q.reject(errResponse);
		    });
		},

		persistUser : function(data) {
			console.log("Service PersistUser "+JSON.stringify(data));
			$http.post('http://localhost:8080/AMSAAS/AMS-REST/registeruser',JSON.stringify(data));
		}
		
	};
}]);