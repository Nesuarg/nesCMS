(function() {
  "use strict";
  
  function usersService($http) {
    
    http.get('/users').success(function(users){
    for (var i in users)
      $scope.users.push(users[i]);
  });
    
  }

  angular
    .module("admin.users")
    .factory("usersService", usersService);
  
}())