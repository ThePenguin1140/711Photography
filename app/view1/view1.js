'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

init = function initF() {
  $(function(){ //DOM Ready

    $(".gridster ul").gridster({
      widget_margins: [10, 10],
      widget_base_dimensions: [140, 140]
    });

  });
};

init();