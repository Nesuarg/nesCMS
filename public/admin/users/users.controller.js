(function() {
  "use strict";
  
  angular
    .module("admin.users", [])
    .controller("usersController", usersController);
  
  function usersController($scope) {
    $scope.users = [];
  }
  
  
}())