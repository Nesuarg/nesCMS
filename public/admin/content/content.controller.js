
(function() {
  "use strict";
  
  angular
    .module("admin.content", [])
    .controller("contentController", contentController);
  
  function contentController($scope) {
    $scope.visitors = [];
  }
  
  
}())