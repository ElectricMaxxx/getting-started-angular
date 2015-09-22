'use strict';

angular.module("myApp", [])
    .controller('UserController', function ($scope) {
        $scope.user = {
            firstName: 'Margarete',
            lastName: 'Mustermann',
            userName: 'maggi-86',
            email: 'm.mustermann@mm.de'
        };

        $scope.getFullName = function () {
            return $scope.user.firstName + ' ' + $scope.user.lastName;
        };

        $scope.resetData = function () {
            $scope.user = {
                firstName: '',
                lastName: '',
                userName: '',
                email: ''
            };
        };

        $scope.a = $scope.b = 0;

        $scope.add = function () {
            return $scope.a + $scope.b;
        };
    });
