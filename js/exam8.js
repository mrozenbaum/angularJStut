// Register our custom filter as a dependency
var app8 = angular.module('app8', ['weatherFilters']);

app8.controller('mainCtrl', function($scope) {

  $scope.students = [
    {name : "Charlie Rozenbaum", gpa: 3.4},
    {name: "Matan Ohad", gpa: 4.0},
    {name: "Miriam Rozenbaum", gpa: 3.8},
    {name: "Hofit Ohad", gpa: 3.9}
  ];

  $scope.student = {
    gpas:[
      {name : "Charlie Rozenbaum", gpa: 3.4},
      {name: "Matan Ohad", gpa: 4.0},
      {name: "Miriam Rozenbaum", gpa: 3.8},
      {name: "Hofit Ohad", gpa: 3.9}
    ]
  };

  $scope.currDate = new Date();

  $scope.randomStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 

  $scope.randArray = [
    "Tomato",
    "Apple",
    "Avacado",
    "Pickles",
    "Raisins"
  ];

  $scope.weather = [
    {day : "Monday", rain: false},
    {day : "Tuesday", rain: true}
  ];


});