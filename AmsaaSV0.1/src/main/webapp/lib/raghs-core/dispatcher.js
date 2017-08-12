/* 
 * Document   : JS
 * Author     : Raghavendra I Badiger
 * Description: 
 *  
 */

define(function(require) {
	"use strict";
	var urlToControllerMap = require("UrlMap"); 

	return {
		init : function(applnContext) {
			var applicationContext=applnContext;
			var dispatcherContext = this;
			console.log("dispatcher init ");
			$("#appContent a").click(function() {
				
				var url = $(this).attr('href');
				if(url == '#billpayments'){
					url = "#billDashBoardDiv";
					console.log("loadModule if "+url);
				}
				console.log("dispatcher init  "+url);
				dispatcherContext.loadModule(url);
			});
		},

		forward : function(url) {
			console.log("forward");
			this.loadModule('#' + url);
		},

		loadModule : function(url) {
			console.log("loadModule "+url);
			var moduleController = urlToControllerMap[url];
			moduleController.init(this,url);
		}

	};

});