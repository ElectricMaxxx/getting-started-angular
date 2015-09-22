'use strict';

angular.module("myApp", [])
    .controller('UserController', function ($scope) {
        $scope.user = {
            firstName: 'Margarete',
            lastName: 'Mustermann'
        };
    });
