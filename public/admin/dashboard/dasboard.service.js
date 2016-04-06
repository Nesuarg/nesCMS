(function() {
  "use strict";
  
  function dashboardService($http) {
    
   http.get('/users').success(function(users){
    for (var i in users)
      $scope.users.push(users[i]);
  });
    
  }

  angular
    .module("admin")
    .factory("dashboardService", dashboardService);
  
}())