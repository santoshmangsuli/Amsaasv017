/* 
 * Document   : JS
 * Author     : Raghavendra I Badiger
 * Description: 
 *  
 */

define(function(require) {
	"use strict";
	return {
		"#home"				: require("./modules/homemanager/controller/homecontroller"),
		"#homeuser"				: require("./modules/homemanager/controller/homeusercontroller"),
		"#people"		    : require("./modules/usermanager/controller/usercontroller"),
		"#peopleprofile"    : require("./modules/usermanager/controller/usercontroller"),
		"#servicemanager"   : require("./modules/servicemanager/servicecatalogue/servicecontroller"),
		"#services"         : require("./modules/servicemanager/servicecatalogue/servicecontroller"),
		"#serviceplans"    : require("./modules/servicemanager/serviceplancatalogue/controller/serviceplancontroller"),
		"#serviceplans1"
		                    : require("./modules/servicemanager/serviceplancatalogue/controller/serviceratecontroller"),
		"#financemanager"	: require("./modules/financemanager/controller/financecontroller"),		
		"#billCreateDiv"	: require("modules/billmanager/controller/billcontroller"),
		"#billDashBoardDiv"	: require("modules/billmanager/controller/billcontroller"),
		"#resourcemanager"  : require("modules/resourcemanager/controller/resourcecontroller"),
		"tableGridStyle"	: "/lib/jquery/jquery-grid/css/ui.jqgrid.css"
	};
});