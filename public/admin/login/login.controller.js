"use strict";

angular.module('adminApp')
    .controller('loginController', function ($scope, $location, authService) {  
    // This object will be filled by the form
            $scope.submit = function () {
            // initial values
            $scope.error = false;
            $scope.disabled = true;

            // call login from service
            authService.login($scope.loginForm.username, $scope.loginForm.password)
                // handle success
                .then(function () {
                    $location.path('/');
                    $scope.disabled = false;
                    $scope.loginForm = {};
                })
                // handle error
                .catch(function () {
                    $scope.error = true;
                    $scope.errorMessage = "Invalid username and/or password";
                    $scope.disabled = false;
                    $scope.loginForm = {};
                });
            };

    });