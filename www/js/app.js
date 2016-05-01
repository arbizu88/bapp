// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // the pet tab has its own child nav-view and history
    .state('tab.mylist-index', {
      url: '/mylist',
      views: {
        'mylist-tab': {
          templateUrl: 'templates/mylist-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

    .state('tab.beer-detail', {
      url: '/beer/:petId',
      views: {
        'mylist-tab': {
          templateUrl: 'templates/beer-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.beers', {
      url: '/beers',
      views: {
        'beers-tab': {
          templateUrl: 'templates/beers.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/beers');

});
