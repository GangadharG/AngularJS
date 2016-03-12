var currencyApp = angular.module('currencyApp', ['ui.router']);

currencyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})

		.state('currency', {
			url: '/currency',
			templateUrl: 'views/currency.html',
			controller: 'CurrencyCtrl'
		});
});

