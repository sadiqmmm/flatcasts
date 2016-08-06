angular.module('Flatcasts', ['ngResource', 'youtube-embed', 'ui.router', 'templates'])
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'index.html',
      controller: 'LecturesCtrl'
    })
  })
