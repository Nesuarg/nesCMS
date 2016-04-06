(function() {
  "use strict";
  
  function loginService($http) {
        
   http.get('/users').success(function(users){
    for (var i in users)
      $scope.users.push(users[i]);
  });
    
  }

  angular
    .module("admin.login")
    .factory("loginService", loginService);
  
}())