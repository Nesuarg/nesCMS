 'use strict';



 var adminServices = (function ($http) {
             var url = '/';
             var user = {};
             $http.post(url, user)
                 .success(function (res) {
                     console.log("Yey, champ");
                 })
                 .error(function (err) {
                     alert('warning', 'hih, yops?', 'try again');
                 });
         });