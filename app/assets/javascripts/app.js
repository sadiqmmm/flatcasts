angular.module('Flatcasts', ['ngResource', 'youtube-embed', 'ui.router', 'templates'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'index.html',
      controller: 'LecturesCtrl'
    })
    .state('lecture', {
      url: '/lectures',
      templateUrl: 'lectures/index.html'
    })
    .state('create', {
      url: '/lectures/create',
      templateUrl: 'lectures/create.html'
    })
    .state('search', {
      url: '/lectures/search',
      templateUrl: 'lectures/search.html'
    })
    .state('show', {
      url: '/lectures/:id',
      controller: 'LecturesCtrl as lecture',
      templateUrl: 'lectures/show.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html'
    })

    $urlRouterProvider.otherwise('/');
  })
