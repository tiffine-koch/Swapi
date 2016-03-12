'use strict';

var app = angular.module('routingApp');

app.controller('peopleCtrl', function($scope, $state, SwapiService) {
  $scope.$watch(function() {
    return SwapiService.people;
  }, function(currentPeople, prevPeople) {
    $scope.people = currentPeople;
    console.log('newVal:', currentPeople);
    console.log('oldVal:', prevPeople);
  })

  $scope.test = function() {
    $scope.people = SwapiService.people;
    console.log('swapi', SwapiService);
  }

  $scope.personDetails = function() {
    console.log('hey there is a person');
    // $state.go('about');
  }

  $scope.goToPerson = function(param) {
    console.log('hey there is a person');
    console.log('param:', param);
    $state.go('swPerson', {
      personId: param
    });
  }

});

app.controller('aboutCtrl', function($scope, $state) {
  $scope.goHome = function() {
    console.log('working');
    console.log('$state', $state);
    $state.go('home');
  }
})

app.controller('personCtrl', function($state, $stateParams) {
  if(!$stateParams.personId) {
    $state.go('peopleList');
    // $state.go('swPeople');
  }
  console.log('params', $stateParams);
})

// $scope.getPageNum = function() {
//   function getPeople(item) {
//     var id = item.attributes['data-id'].value;
//     console.log('id', id);
//   }
// }
