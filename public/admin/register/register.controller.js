'use strict';


angular
    .module('adminApp')
    .controller('registerCtrl', function ($scope, $rootScope, $http, alert, $resource) {
        $scope.submit = function () {


            var user = {
                username: $scope.username
                , password: $scope.password
            };

            console.log(JSON.stringify(user));

            $http({
                method: 'POST'
                , url: '/api/auth/register',
                data: user
            }).then(function successCallback(res) {
                alert('success', 'OK ', 'You are now registered')
            }, function errorCallback(res) {
                alert('danger', 'OPPS ', 'coudnt register you as an user')
            });


           
        }
    });


/*
 $http.post(url, user)
                .success(function (res) {
                    alert('success', 'OK ', 'You are now registered')
                })
                .error(function (err) {
                    alert('danger', 'OPPS ', 'coudnt register you as an user')
                });



angular.module('psNesApp').controller('RegisterController', function ($scope, alert, $auth) {
	
			.then(function (res) {
				alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email + '! Please email activate your account in the next several days.');
			})
			.catch(function (err) {
				alert('warning', 'Unable to create account :(', err.message);
			});
	};
});*/