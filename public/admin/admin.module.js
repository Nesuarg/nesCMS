(function () {
    "use strict";

    angular
        .module('adminApp', ['ui.router'])
        .config(function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/')
            $stateProvider
                .state('dashboard', {
                    url: '/',
                    templateUrl: 'dashboard/dashboard.view.html',
                    controller: 'dashboardController'
                })
                .state('content', {
                    url: '/content',
                    templateUrl: 'content/content.view.html'
                })
                .state('users', {
                    url: '/users',
                    templateUrl: 'users/users.view.html'
                })

            .state('register', {
                url: '/register',
                templateUrl: 'register/register.view.html',
                controller: 'registerCtrl'

            });


        });
    /*.directive('validateMatch', function () {
            return {
                require: 'ngModel'
                , link: function (scope, element, attrs, ngModelCtrl) {
                    function validateEqual(value) {
                        var valid = (value === scope.$eval(attrs.validateMatch));
                        ngModelCtrl.$setValidity('equal', valid);
                        return valid ? value : undefined;
                    }

                    ngModelCtrl.$parsers.push(validateEqual);
                    ngModelCtrl.$formatters.push(validateEqual);

                    scope.$watch(attrs.validateMatch, function () {
                        ngModelCtrl.$setViewValue(ngModelCtrl.viewValue);
                    });
                }
            };
    });*/
    
    
    
    
    
    
    /*angular
        .module("admin", ["admin.dashboard", "admin.content", "admin.users", "admin.register"
            , "ngResource", "ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/users/', {
                    templateUrl: './users/users.view.html'
                    , controller: 'usersController'
                })
                .when('/content/item/:id', {
                    templateUrl: './content/contentItem.view.html'
                    , controller: 'contentItemController'
                })
                .when('/content/item/', {
                    templateUrl: './content/contentItem.view.html'
                    , controller: 'contentItemController'
                })
                .when('/content/', {
                    templateUrl: './content/content.view.html'
                    , controller: 'contentController'
                })
                .when('/login/', {
                    templateUrl: './login/login.view.html'
                    , controller: 'loginController'
                })
                .when('register/', {
                    templateUrl: './register/register.view.html'
                    , controller: 'registerController'

                })
                .when("/", {
                    templateUrl: './dashboard/dashboard.view.html'
                    , controller: 'dashboardController'
                })
                .otherwise({
                    redirectTo: '/'
                });

        }) // end of config()
        .run(function ($rootScope, $http) {
            $rootScope.message = '';

            // to logout on any page.
            $rootScope.logout = function () {
                $rootScope.message = 'Logged out.';
                $http.post('/logout');
            };
        })
        .directive('validateMatch', function () {
            return {
                require: 'ngModel'
                , link: function (scope, element, attrs, ngModelCtrl) {
                    function validateEqual(value) {
                        var valid = (value === scope.$eval(attrs.validateMatch));
                        ngModelCtrl.$setValidity('equal', valid);
                        return valid ? value : undefined;
                    }

                    ngModelCtrl.$parsers.push(validateEqual);
                    ngModelCtrl.$formatters.push(validateEqual);

                    scope.$watch(attrs.validateMatch, function () {
                        ngModelCtrl.$setViewValue(ngModelCtrl.viewValue);
                    });
                }
            };
        });*/


}());