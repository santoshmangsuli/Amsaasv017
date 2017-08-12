define(function(require) {
	var userModelView = function(){
		var self = this;
		self.dataModel = {
			persnId : ko.observable(),
			persnFlatNum : ko.observable().extend({ required: {message : "Please enter Flat no"} }),
			persnFirstName : ko.observable().extend({ required: {message : "Please enter First Name"} }),
			persnLastName : ko.observable().extend({ required: {message : "Please enter Last Name"} }),
			
			persnPhoneNum : ko.observable().extend({ required: {message : "Please enter Landline No"} }),
			persnMobileNum : ko.observable().extend({ required: {message : "Please enter Mobile No"} }),
			persnEmailId : ko.observable().extend({ 
				required: {message : "Please enter email id"} 
			}),
			apartmentName: ko.observable().extend({
                required: true
            }),
			street: ko.observable(),
			landMark: ko.observable(),
			city: ko.observable().extend({ required: {message : "Please enter City"} })
			
		},
	
		self.viewModel = {
				isIdEditable : ko.observable(false),
				isEditable : ko.observable(false),
				isSelected : ko.observable(false)
		},

		self.init = function(data){
			if(data != null) {
				console.log("!="+data.persnAddress.apartmentName);
				this.dataModel.persnId = data.persnId;
				this.dataModel.persnFlatNum(data.persnAddress.flatNumber);
				this.dataModel.persnFirstName(data.persnFirstName);
				this.dataModel.persnLastName(data.persnLastName);
				this.dataModel.persnPhoneNum(data.persnDetail.landLineNumber);
				this.dataModel.persnMobileNum(data.persnDetail.mobileNumber);
				this.dataModel.persnEmailId(data.persnDetail.emailId);
				this.dataModel.apartmentName(data.persnAddress.apartmentName);
				this.dataModel.street(data.persnAddress.street);
				this.dataModel.landMark(data.persnAddress.landMark);
				this.dataModel.city(data.persnAddress.city);
				
			}
			
		};

		
	};
	return userModelView;
});
