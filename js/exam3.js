/* 
Directives allow you to extend HTML. There are many built in
and you can make custom ones as well. Build in directives provide
event handling, form validation, templates and more.
*/

// Define the AngularJS Module
var app3 = angular.module('app3', []);

//Define the controller and implement the Scope
app3.controller('gListCtrl', function($scope) {

  $scope.groceries = [
    {item: "Avacado", purchased: false},
    {item: "Tomato", purchased: false},
    {item: "Pickles", purchased: false},
    {item: "Bread", purchased: false},
    {item: "Milk", purchased: false},
    {item: "Cake", purchased: false},
    {item: "Eggs", purchased: false}
  ];

  // Return a different HTML partial based on whether the 
  // checkbox is checked or not
  $scope.getList = function() {
    return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html"
  };

});