(function () {
    "use strict";

    angular
        .module('adminApp', ['ui.router', 'ngResource'])
        .config(function ($urlRouterProvider, $stateProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/')
            $stateProvider
                .state('main', {
                    url: '/'
                    , templateUrl: 'main/main.view.html'
                })
                .state('dashboard', {
                    url: '/dashboard'
                    , templateUrl: 'dashboard/dashboard.view.html'
                    , controller: 'dashboardController'

                })
                .state('content', {
                    url: '/content'
                    , templateUrl: 'content/content.view.html'
                })
                .state('users', {
                    url: '/users'
                    , templateUrl: 'users/users.view.html'
                })
                .state('login', {
                    url: '/login'
                    , templateUrl: 'login/login.view.html'
                    , controller: 'loginController'

                })
                .state('register', {
                    url: '/register'
                    , templateUrl: 'register/register.view.html'
                    , controller: 'registerCtrl'

                })
                .state('logout', {
                    url: '/logout'
                    , controller: function ($scope, $route) {
                        $route.reload()
                    }
                });
            var checkLoggedIn = function ($q, $timeout, $http, $location, $rootScope) {
                var deferred = $q.defer();

                // ajax call to check if the user is logged in
                $http.get('api/auth/loggedin').success(function (user) {
                    //auth
                    if (user !== '0')
                        deferred.resolve();
                    else {
                        $rootScope.message = 'need to log in';
                        $location.url('/login');
                    }
                });
                return deferred.promise;
            };
            $httpProvider.interceptors.push(function ($q, $location) {
                return {
                    response: function (response) {
                        // do something on success
                        return response;
                    }
                    , responseError: function (response) {
                        if (response.status === 401)
                            $location.url('/login');
                        return $q.reject(response);
                    }
                };
            });

        })
        .run(function ($rootScope, $http) {
            $rootScope.message = '';

            // Logout function is available in any pages
            $rootScope.logout = function () {
                $rootScope.message = 'Logged out.';
                $http.post('api/auth/logout');
            };
        });
}());