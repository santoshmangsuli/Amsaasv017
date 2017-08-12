/* 
 * Document   : JS
 * Author     : Raghavendra I Badiger
 * Description: 
 *  
 */

define(function(require) {
	/*
	 * To avoid accidental global variable creation
	 */
	"use strict";

	var urlController = require("Dispatcher");

	var app = {
		context : this,
		start : function(name) {
			console.log("Application starting"+name);
			urlController.init();
			urlController.forward(name);
			console.log("Application started");
		}
	};
	return app;
});