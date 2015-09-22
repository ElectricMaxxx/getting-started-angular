'use strict';

angular.module("myApp", [])
    .controller('UserController', function () {
        var vm = this;

        vm.user = {
            firstName: 'Margarete',
            lastName: 'Mustermann',
            userName: 'maggi-86',
            email: 'm.mustermann@mm.de'
        };

        vm.getFullName = function () {
            return vm.user.firstName + ' ' + vm.user.lastName;
        };

        vm.resetData = function () {
            vm.user = {
                firstName: '',
                lastName: '',
                userName: '',
                email: ''
            };
        };

        vm.a = vm.b = 0;

        vm.add = function () {
            return vm.a + $scope.b;
        };
    });
