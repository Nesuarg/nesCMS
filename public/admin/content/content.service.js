(function() {
  "use strict";
  
  function contentService($http) {
        
      var getVisitors = function(){
      
    }
    
    return {
      getVisitors: getVisitors
    }
    
  }

  angular
    .module("admin")
    .factory("contentService", contentService);
  
}())