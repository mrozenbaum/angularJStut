var app5 = angular.module('app5', []);

app5.controller('gListCtrl', function($scope) {

  $scope.groceries = [
    {item: "Tomatoes", purchased: false},
    {item: "Potatoes", purchased: false},
    {item: "Bread", purchased: false},
    {item: "Avacado", purchased: false}
  ];

  // Recieves the new item entered in the input box and puts
  // it on the end of the array
  $scope.addItem = function(newItem) {

    // Check that the input box has a value
    if(!(newItem === undefined || newItem === "")) {
      $scope.groceries.push({
        item: newItem, purchased: false
      });
      $scope.missingNewItemError = "";
    } else {
      // Show an error if no item was entered
      $scope.missingNewItemError = "Please enter an Item";
    }
  };
});


app5.controller('userCtrl', function($scope) {

  $scope.user = [{
    fName: "Miriam",
    lName: "Rozenbaum",
    street: "123 Main St",
    subscribe: "Subscribe",
    delivery: "Email"
  }];

  $scope.saveUser = function(userInfo) {

    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, street: userInfo.street, subscribe: userInfo.subscribe, delivery: userInfo.delivery
      });
      console.log("User Saved");
    } else {
      console.log("Error: User Not Saved");
    }
  };

});










