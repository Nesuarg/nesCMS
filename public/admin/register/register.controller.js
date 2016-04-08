(function () {

    'use strict';


    angular
        .module('adminApp')
        .controller('registerCtrl', function ($scope, alert) {

            $scope.submit = function () {


                function alert($scope, $timeout) {

                    var alertTimeout;
                    return function (type, title, message, timeout) {
                        $scope.alert = {
                            hasBeenShown: true
                            , show: true
                            , type: type
                            , title: title
                            , message: message
                        };
                        $timeout.cancel(alertTimeout);
                        alertTimeout = $timeout(function () {
                            $scope.alert.show = false;
                        }, timeout || 2500);
                    }

                }
            };
        });
}());
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