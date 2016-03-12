'use strict';

var app = angular.module('routingApp');

app.service('SwapiService', function($http) {

  var thisPageArray = []
  var possiblePages = [1,2,3,4,5,6,7,8,9];

  var page = 3;
  var pageNum = "?page=" + page;
  var url = "http://swapi.co/api/people/"
  this.getPeople = function(num) {
    return $http.get(url + pageNum)

    .then(res => {
      //SwapiService.people
      this.people = res.data.results;
      //create a local person array of current page
      thisPageArray.push(this.people);
      console.log(thisPageArray);
    }, err => {
      console.error('SwapiService error:', error);
    })
  };
});
  // var allSwapi = [];
  //
  // for(var i = 1; i <= 9; i++) {
  //   var pageNum = "?page=" + i;
  //   var url = "http://swapi.co/api/people/";
  //   $http.get(url + pageNum)
  //   .then(function (res) {
  //   allSwapi = allSwapi.concat(res.data.results);
  //   this.people = allSwapi;
  //   console.log('all', allSwapi);
  //     });
  //   };
// });
