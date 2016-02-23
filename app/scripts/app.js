'use strict';

/**
 * @ngdoc overview
 * @name reflectionsApp
 * @description
 * # reflectionsApp
 *
 * Main module of the application.
 */
angular
  .module('reflectionsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'firebase'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/angStudies', {
        templateUrl: 'views/angularStudies.html',
        controller: 'AngStudiesCtrl'
      })
      .when('/firebaseStudies', {
        templateUrl: 'views/firebaseStudies.html',
        controller: 'FireBaseStudiesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
