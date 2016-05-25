"use strict";

angular
    .module("admin.users", [])
    .controller("usersController", function usersController($scope, userService) {
        var getUser = function () {
            userService.getUsers()
                .then(function (users) {
                    $scope.users = users;
                    });
            };

    });