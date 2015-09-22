'use strict';

angular.module("myApp", [])
    .controller('UserController', function ($timeout) {
        var vm = this;

        vm.user = {
            name: 'maggi-86',
            online: true
        };

        $timeout(function () {
            vm.user.online = false;
        }, 4000);
    });
