<!--
 * 
 *   Document   : Application Style
 *   Author     : Raghavendra Badiger
 *   Description: "HOME" page JSP which serves as template for website
 -->
<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>

<html>
	<head>
		<title>AmsaaS</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width-device-width,initial-scale=1.0" />		
		<link rel="shortcut icon"
			href="${pageContext.request.contextPath}/lib/bootstrap/img/leaf.ico" />		
		<link rel="stylesheet"
			href="${pageContext.request.contextPath}/application/styles/glyph.css" />
		<link rel="stylesheet"
			href="${pageContext.request.contextPath}/application/styles/application.css" />
		<link rel="stylesheet" type="text/css"
			href="${pageContext.request.contextPath}/lib/bootstrap/css/angular-datepicker.css" />
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
    	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.js"></script>
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.js"></script>
    	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-animate.js"></script>
    	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-sanitize.js"></script>
    	
		<script src="${pageContext.request.contextPath}/static/js/app.js" ></script>
		<script src="${pageContext.request.contextPath}/static/js/service/userservice.js"></script>
		<script src="${pageContext.request.contextPath}/static/js/controller/usercontroller.js"></script>
		<script src="${pageContext.request.contextPath}/static/js/service/billService.js"></script>
		<script src="${pageContext.request.contextPath}/static/js/controller/billManagerController.js"></script>		
	</head>

<body ng-app="amsApp">
	<script src="${pageContext.request.contextPath}/lib/bootstrap/js/angular-datepicker.js"></script>
	<!-- AppContent starts which is main container of template -->

	<div id="appContent" >
		<!-- Header starts -->
		<header id="Header">
			<div class="container">
				<div class="row">
					<div class="span4">
						<!-- Logo and site link -->
						<div class="logo">
							<h1>AmsaaS New!!!</h1>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- Header ends -->

		<!-- Navigation Starts -->
		<div id="Main_Menu" class="navbar">
			<div class="navbar-inner">
				<div class="tabbable">
					<div>
						<div class="row">
							<div class="span12">
								<ul class="nav nav-tabs">
									<li class="active"><a href="#people" ><i
											class="icon-asterisk"></i> PEOPLE</a>
									</li>
									<li><a href="#finances" ><i
											class="icon-briefcase"></i> FINANCES</a>
									</li>
									<li><a href="#/billpayments"><i
											class="icon-list-alt"></i> BILLING &amp; PAYMENTS</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Navigation Ends -->

		<!-- Content starts -->
		<div id="ContentBody" class="container">
			
			<div class="row">
				<div class="span12">
					<div class="tab-content">
						<div class="tab-pane active" id="people">
							<div ng-view></div>
						<div id="finances">
							
						</div>
						<div id="billpayments">
						</div>						
					</div>
				</div>
			</div>
		</div>
		<!-- Content Ends -->

	</div>
		 	
		
				
	<!-- Appcontent Ends-->
</body>
</html>