// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
	
	$stateProvider

    .state('home', {
        url: '/home',
		template: '<div class="jumbotron text-center">\
						<h1>Home - The Problem</h1>\
						<p>This page is to show a problem that <code>angular-ui-router</code> has with SVG links\
						after Chrome updated to <code>Version 50.0.2661.102 m</code>. Tested and works in Firefox 46.0.1 and IE 11.\
						</p>\
						<h2>Reproducing the problem</h2>\
						<p>Navigate to <em>About</em> page using the navigation at the top, then click on the red SVG button <em>SVG link to Home</em>,\
						this should navigate back to the home page\
						like the normal first <em>Home</em> link does but it does not work in Chrome.</p>\
						<p>Note, the problem occurs only when not using #hasbangs by enabling <code>$locationProvider.html5Mode(true)</code>.\
					</div>' 
    })


    .state('about', {
        url: '/about',
		template: '<div class="jumbotron text-center">\
						<h1>About - A sample page</h1>\
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\
						deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,\
						similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>\
					</div>'
       
    });

}); // closes $routerApp.config()
