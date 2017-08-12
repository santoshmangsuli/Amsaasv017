<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<title>AmsaaS</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width-device-width,initial-scale=1.0" />		
		<!-- Angular Material style sheet -->
  		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
	  	<link rel="stylesheet" href="https://rawgit.com/daniel-nagy/md-data-table/master/dist/md-data-table.css">
	  	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	</head>

<body ng-app="amsApp">
	<!-- Ang Mat start-->
	<md-toolbar>
		<h1>AmsaaS New!!!</h1>
	</md-toolbar>
  	<md-content class="md-padding">
  	<md-nav-bar      md-selected-nav-item="currentNavItem"       nav-bar-aria-label="navigation links">
      <md-nav-item md-nav-click="goto('page1')" name="page1">
        PEOPLE
      </md-nav-item>
      <md-nav-item md-nav-click="goto('page2')" name="page2">
        FINANCES
      </md-nav-item>
      <md-nav-item md-nav-click="goto('page3')" name="page3">
        BILLING &amp; PAYMENTS
      </md-nav-item>
      <md-nav-item md-nav-href="#page4" name="page5">Page Four</md-nav-item>
      <!-- these require actual routing with ui-router or ng-route, so they
      won't work in the demo

      <md-nav-item md-nav-sref="app.page5" name="page4">Page Five</md-nav-item>
      You can also add options for the <code>ui-sref-opts</code> attribute.
      <md-nav-item md-nav-sref="page6" sref-opts="{reload:true, notify:true}">
        Page Six
      </md-nav-item>
      -->
    </md-nav-bar>
    <div class="ext-content">
      <div ng-view></div>
    </div>
  </md-content>	
<!-- Ang Mat End-->	
	  	<!-- Angular Material requires Angular.js Libraries -->
  		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
  		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
  		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-route.js"></script>
		<script src="https://rawgit.com/daniel-nagy/md-data-table/master/dist/md-data-table.js"></script>
  		<!-- Angular Material Library -->
  		<script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
  		<script src="${pageContext.request.contextPath}/static/js/app.js" ></script>
		<script src="${pageContext.request.contextPath}/static/js/service/userservice.js"></script>
		<script src="${pageContext.request.contextPath}/static/js/controller/usercontroller.js"></script>
		<script src="${pageContext.request.contextPath}/static/js/service/billService.js"></script>
		<script src="${pageContext.request.contextPath}/static/js/controller/billManagerController.js"></script>		

</body>
</html>