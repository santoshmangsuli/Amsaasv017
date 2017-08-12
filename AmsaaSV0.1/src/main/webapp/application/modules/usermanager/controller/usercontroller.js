define(function(require) {
	"use strict";

	var userViewTemplate = require('Text!../views/usermanager.html'), 
		userProfileTemplate = require('Text!../views/userprofile.html'),
		UserModelView = require('../model/userModelView'), 
		userRepo = require('repository/userRepository'), 
		viewResolver = require("ViewResolver"),
		PagedGridView = require("modules/common/model/pagedgridmodel");
		

	var userController = {

		userPagedGridView : ko.observable(''),
		UserModelView : ko.observable(''),
		userModelProfile : ko.observable(''),
		addNewUser : function() {
			console.log("data "+JSON.stringify(this.userModelProfile.dataModel.persnRoles));
			var data = {
						persnId : this.userModelProfile.dataModel.persnId,
		            	persnFirstName : this.userModelProfile.dataModel.persnFirstName(), 
		            	persnLastName : this.userModelProfile.dataModel.persnLastName(),
		            	persnRoles  :  [this.userModelProfile.dataModel.persnRoles],
		            	persnDetail : {
		            		landLineNumber : this.userModelProfile.dataModel.persnPhoneNum(),
		            		mobileNumber : this.userModelProfile.dataModel.persnMobileNum(),
		            		emailId : this.userModelProfile.dataModel.persnEmailId()
		            	},
		            	persnAddress : {
		            		flatNumber : this.userModelProfile.dataModel.persnFlatNum(),
		            		apartmentName : this.userModelProfile.dataModel.apartmentName(),
		            		street : this.userModelProfile.dataModel.street(),
		            		landMark : this.userModelProfile.dataModel.landMark(),
		            		city : this.userModelProfile.dataModel.city()
		            			
		            	}
		            };
			userRepo.persistUser(data);
			console.log("data 1"+JSON.stringify(data));
			viewResolver.renderModelView("people", this, userViewTemplate,
			"userMgrStyle");
		},
		init : function(data,url) {
			console.log("init USER-CONTROLLER!!"+url);
			userController.userModelProfile = new UserModelView();
			if(url == '#people'){
			userRepo.getAllUserList()
					.then(
							function(usrData) {
								var mappedUserList = $.map(usrData, function(item) {
									var usr = new UserModelView();
									usr.init(item);
									return usr;
								});
								userController.userPagedGridView(new PagedGridView(
									mappedUserList, [ "1", "5","10", "15" ], "5"));
							});
			ko.applyBindings(UserModelView);
			console.log("init USER-CONT ROLLER eNDinG!!");
			viewResolver.renderModelView("people", this, userViewTemplate,
					"userMgrStyle");
			}else if(url == '#peopleprofile'){
				userRepo.getUserDetailByPersnIdInSesion()
				.then(
						function(usrData) {
							console.log("init "+JSON.stringify(usrData));
							//console.log("userController.userModelProfile "+userController.userModelProfile);
							userController.userModelProfile.init(usrData);
								console.log("After init "+JSON.stringify(userController.userModelProfile.viewModel.isEditable));
														
						});
				ko.applyBindings(UserModelView);
				//console.log("new profile"+JSON.stringify(this.userModelProfile));
				viewResolver.renderModelView("peopleprofile", this, userProfileTemplate,
				"userMgrStyle");	

				console.log("init USER-CONTROLLER eNDinG user!!");		
	
			}

		},
		inituser : function() {
			console.log("init USER-CONTROLLER user !!");
			userController.userModelProfile = new UserModelView();
			userRepo.getUserDetailByPersnIdInSesion()
					.then(
							function(usrData) {
								console.log("init "+JSON.stringify(usrData));
								//console.log("userController.userModelProfile "+userController.userModelProfile);
								userController.userModelProfile.init(usrData);
									console.log("After init "+JSON.stringify(userController.userModelProfile.viewModel.isEditable));
															
							});
			ko.applyBindings(UserModelView);
			//console.log("new profile"+JSON.stringify(this.userModelProfile));
			viewResolver.renderModelView("people", this, userProfileTemplate,
			"userMgrStyle");	

			console.log("init USER-CONTROLLER eNDinG user!!");		

		},
		makeEditable : function(){
			console.log(this.userModelProfile.viewModel.isEditable());
			this.userModelProfile.viewModel.isEditable(true);
		},
		cancelEditable : function(){
			console.log(this.userModelProfile.viewModel.isEditable());
			this.userModelProfile.viewModel.isEditable(false);
		},
		removeUser : function(data) {
			console.log("removeUser data "+JSON.stringify(data.dataModel));
			if (data !== "") {
				userController.userPagedGridView().dataRepo.remove(data);
				userRepo.removeUser(data.dataModel);
				userController.userPagedGridView().moveToLastPage();
			}
		},

		saveUser : function(data) {
			console.log("saveUser data "+JSON.stringify(data));
			if (data !== "") {
				if (data.viewModel.isIdEditable() === true) {
					console.log("saveUser isIdEditable ");
					data.viewModel.isIdEditable(false);
					data.viewModel.isEditable(false);
					userRepo.persistUser(data.dataModel).then(function(serverData){
						var mappedUserList = $.map(serverData, function(item) {
								return new UserModelView(item);
							});
						userController.srvcPagedGridView().dataRepo.removeAll();
						userController.srvcPagedGridView().dataRepo(mappedUserList);
					});
				} 
				else if(data === "")
				{
					userController.srvcPagedGridView().dataRepo.remove(data);
				}	
				else {
					console.log("saveUser isEditable ");
					data.viewModel.isEditable(false);
					var person = {
							persnId : data.dataModel.persnId(),
			            	persnFirstName : data.dataModel.persnFirstName(), 
			            	persnLastName : data.dataModel.persnLastName(),
			            	persnRoles  :  data.dataModel.persnRoles(),
			            	persnDetail : {
			            		landLineNumber : data.dataModel.persnPhoneNum(),
			            		mobileNumber : data.dataModel.persnMobileNum(),
			            		emailId : data.dataModel.persnEmailId()
			            	},
			            	persnAddress : {
			            		flatNumber : data.dataModel.persnFlatNum(),
			            		apartmentName : data.dataModel.apartmentName(),
			            		street : data.dataModel.street(),
			            		landMark : data.dataModel.landMark(),
			            		city : data.dataModel.city()
			            			
			            	}
			            };
					userRepo.updateUser(person);
				}
			}

		}
	}	;

	return userController;

});