    /*angular
        .module('adminApp')
        .factory('registerService' ['$http', '$resource', ], function ($scope, $rootScope, $http, alert) {
        $scope.submit = function(){
            
            var url = $resource('/register');
            var user = {
                email: $scope.email,
                password: $scope.password
            };
            
            $http.post(url, user)
            .success(function(res){
                alert('success', 'OK ', 'You are now registered')
            })
            .error(function(err){
                alert('warning', 'OPPS ', 'coudnt register you as an user')
            });
        } 
    });*/