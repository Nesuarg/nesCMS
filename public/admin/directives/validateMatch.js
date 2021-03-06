'use strict';

angular
    .module('adminApp')
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
    });