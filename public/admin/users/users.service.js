(function() {
  "use strict";
  
  function usersService($http) {
    
    var getVisitors = function(){
      
    }
    
    return {
      getVisitors: getVisitors
    }
    
  }

  angular
    .module("admin.users")
    .factory("usersService", usersService);
  
}())