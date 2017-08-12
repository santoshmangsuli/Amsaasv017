'use strict';

angular.module('amsApp').controller('UserController', ['$scope','$http', 'async','UserService','$filter', function($scope, $http,async,UserService,$filter) {
	
	var self = this;
	var REST_SERVICE_URI = 'http://localhost:8080/AMSAAS/AMS-REST/users';
	

    // init
    $scope.sort = {       
                sortingOrder : 'id',
                reverse : false
            };
    
    $scope.gap = 10;
    
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 10;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    $scope.ctrlusers=async;
	self.submitUser = submitUser;

	self.user = {
			persnId : '',
			persnFlatNum : '',
			persnFirstName : '',
			persnLastName : '',			
			persnPhoneNum : '',
			persnMobileNum : '',
			persnEmailId : '',
			apartmentName: '',
			persnRoles: '',
			street: '',
			landMark: '',
			city: '',
			startDate:''
			};
	
	function submitUser(){
		console.log(JSON.stringify(self.user));
		var person = {
				persnId : '',
            	persnFirstName : self.user.persnFirstName, 
            	persnLastName : self.user.persnLastName,
            	startDate : self.user.startDate,
            	/*persnRoles  :  self.user.persnRoles,*/
            	persnDetail : {
            		landLineNumber : self.user.persnPhoneNum,
            		mobileNumber : self.user.persnMobileNum,
            		emailId : self.user.persnEmailId
            	},
            	persnAddress : {
            		flatNumber : self.user.persnFlatNum,
            		apartmentName : self.user.apartmentName,
            		street : self.user.street,
            		landMark : self.user.landMark,
            		city : self.user.city            			
            	}
            };
		UserService.persistUser(person);
		
	};

    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.ctrlusers, function (item) {
            for(var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 1;
        // now group by pages
        $scope.groupToPages();
    };
    
  
    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
        console.log("pagedItems.length "+$scope.pagedItems.length);
    };
    
    $scope.range = function (size,start, end) {
        var ret = [];        
        console.log(size,start, end);
                      
        if (size < end) {
            end = size;
            start = size-$scope.gap;
            if(start<0){
            	start=0;
            }
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }        
         console.log(ret);        
        return ret;
    };
    
    $scope.prevPage = function () {
    	console.log("$scope.currentPage "+$scope.currentPage);
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    
    $scope.nextPage = function () {
    	console.log("$scope.currentPage "+$scope.currentPage);
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };
    
    $scope.setPage = function () {
    	console.log("$scope.currentPage "+$scope.currentPage);
        $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
    $scope.$watch('ctrlusers', function() {
        $scope.search();
    });

   
}]);


angular.module('amsApp').$inject = ['$scope', '$filter'];

angular.module('amsApp').directive("customSort", function() {
return {
    restrict: 'A',
    transclude: true,    
    scope: {
      order: '=',
      sort: '='
    },
    template : 
      ' <a ng-click="sort_by(order)" style="color: #555555;">'+
      '    <span ng-transclude></span>'+
      '    <i ng-class="selectedCls(order)"></i>'+
      '</a>',
    link: function(scope) {
                
    // change sorting order
    scope.sort_by = function(newSortingOrder) {       
        var sort = scope.sort;
        
        if (sort.sortingOrder == newSortingOrder){
            sort.reverse = !sort.reverse;
        }                    

        sort.sortingOrder = newSortingOrder;        
    };
    
   
    scope.selectedCls = function(column) {
        if(column == scope.sort.sortingOrder){
            return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
        }
        else{            
            return'icon-sort' ;
        } 
    };      
  }// end link
};
});
