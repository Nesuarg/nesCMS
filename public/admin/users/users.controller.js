"use strict";

angular
    .module("adminApp")
    .controller("usersController", function ($scope, usersService) {
        $scope.user = null;
    
        usersService.user($scope.getUser)
            .then(function(){
            
        })


    });