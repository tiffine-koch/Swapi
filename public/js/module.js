'use strict';

var app = angular.module('routingApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider //gives the ability to define states
  //.state(stateName, configObject, )
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('about', { url: '/about', templateUrl: 'html/about.html', controller: 'aboutCtrl' })
    .state('swPeople', { url: '/people', templateUrl: 'html/people.html', controller: 'peopleCtrl' })
    .state('swPerson', {url: '/person/:personId', template: '<h1>Person</h1>', controller: 'personCtrl'})
  //give this a default url, in case it gets a url it doesn't know
  $urlRouterProvider.otherwise('/swPeople');
});

//closest thing to an angular "init" function
app.run(function(SwapiService) {
  SwapiService.getPeople();
  console.log('app.run');
});
