'use strict';

angular.module("myApp", [])
    .filter('localCurrency', function () {
        return function (number, locale, code) {
            locale = locale || 'de-DE';
            code = code || 'EUR';

            if (!number) {
                return;
            }

            return number.toLocaleString(locale, {
                style: 'currency',
                currency: code,
                minimumFractionDigits: 2
            });
        };
    })

    .controller('UppercaseController', function () {
        var vm = this;

        vm.user = {
            firstName: 'Margarete',
            lastName: 'Mustermann'
        };
    })

    .controller('LimitToController', function () {
        var vm = this;

        vm.sentence = 'Lorem ipsum dolor set amet';
        vm.limit = 5;
    })

    .controller('CurrencyFilterController', function () {
        var vm = this;

        vm.product = {
            title: 'Digital Kamera',
            price: 244.95
        };
    })

    .controller('ListFilterController', function () {
        var vm = this;

        vm.buddies = [
            {name: 'Margarete', online: true},
            {name: 'Luise', online: false},
            {name: 'Gerhard', online: true},
            {name: 'Maria', online: false},
            {name: 'Julia', online: false},
            {name: 'Gert', online: true},
            {name: 'Margot', online: true},
            {name: 'Ludwig', online: true}
        ];

        vm.statusFilter = {};

        vm.setStatusFilter = function (status) {
            switch (status) {
                case 'online':
                    vm.statusFilter = {online: true};
                    break;
                case 'offline':
                    vm.statusFilter = {online: false};
                    break;
                default:
                    vm.statusFilter = {};
            }
        };
    });
