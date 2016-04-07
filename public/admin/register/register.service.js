(function(){

    'use strict';
    
function alert($rootScope, $timeout){

        var alertTimeout;
      return function(type, title, message, timeout) {
          $rootScope.alert = {
              hasBeenShown: true,
              show: true,
              type: type,
              title: title,
              message: message
          };
          $timeout.cancel(alertTimeout);
          alertTimeout = $timeout(function(){
              $rootScope.alert.show = false;
              }, timeout || 2500);
      }

	angular
		.module("AdminApp")
		.factory("registerService", registerService);

};
}());
    
    
    /*(function() {
  'use strict';
  
  angular.module('adminApp', [])
  .service('alert', function alert($rootScope, $timeout){
      var alertTimeout;
      return function(type, title, message, timeout) {
          $rootScope.alert = {
              hasBeenShown: true,
              show: true,
              type: type,
              title: title,
              message: message
          };
          $timeout.cancel(alertTimeout);
          alertTimeout = $timeout(function(){
              $rootScope.alert.show = false;
              }, timeout || 2500);
      }
  });
}())*/