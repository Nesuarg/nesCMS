'use strict';


    angular
        .module('adminApp')
        .controller('registerCtrl', function ($scope, $rootScope, $http, alert) {
        $scope.submit = function(){
            
            var url = 'http://localhost:3000/admin/api/register';
            var user = {
                email: $scope.email,
                password: $scope.password
            };
            
            $http.post(url, user)
            .success(function(res){
                alert('success', 'OK', 'you are now registered')
            })
            .error(function(err){
                alert('warning', 'OPPS', 'coudnt do want u want')
            });
        } 
    });

 
/*
angular.module('psNesApp').controller('RegisterController', function ($scope, alert, $auth) {
	
			.then(function (res) {
				alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email + '! Please email activate your account in the next several days.');
			})
			.catch(function (err) {
				alert('warning', 'Unable to create account :(', err.message);
			});
	};
});*/