// Create a module named weatherfilters
// The name for the filters is rainig and different unicode
// charachters are returned based on weather an item is true or false

angular.module('weatherFilters',[]).filter('raining', function() {
  return function(input){
    return input ? '\u2602' : '\u2600';
  };
});

