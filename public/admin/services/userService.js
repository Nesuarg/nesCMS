"use strict";
    
  function usersService($http, $resource){
    
    var User = $resource("/api/users/:id", {id: '@_id' });

    var getUser = function(id){
      return User.get({id: id}).$promise;
    };
    
    var getUsers = function(){
      return User.query().$promise;
    };
    
    var saveUser = function(userdata) {
      return User.save(userdata).$promise;
    };
    
    var deleteUser = function(id) {
      return User.remove({id: id}).$promise;
    };

    return {
      getUser: getUser,
      getUsers: getUsers,
      saveUser: saveUser,
      deleteUser: deleteUser
    };
    
  }
  
  angular
    .module("adminApp")
    .factory("usersService", usersService);