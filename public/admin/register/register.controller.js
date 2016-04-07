(function () {

    'use strict';


    angular
        .module('adminApp')
        .controller('registerCtrl', function($scope, $http, alert, registerService) {
            
        $scope.submit = function () {
                
                var url = '/';
                var user = {};
                $http.post(url, user)
                    .success(function (res) {
                        console.log("Yey, champ");
                    })
                    .error(function (err) {
                        alert('warning', 'hih, yops?', 'try again');
                    });
        
            };
        });
}());

/*angular.module('psNesApp').controller('RegisterController', function ($scope, alert, $auth) {
	
			.then(function (res) {
				alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email + '! Please email activate your account in the next several days.');
			})
			.catch(function (err) {
				alert('warning', 'Unable to create account :(', err.message);
			});
	};
});*/