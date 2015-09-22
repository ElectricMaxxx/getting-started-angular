angular.module("myApp", [])
    .service('UserService', function () {
        this.list = [
            {name: 'Max', lastName: 'Mustermann'},
            {name: 'Maggie', lastName: 'Mustermann'},
        ];

        this.addUser = function (user) {
            this.list.push(user);
        };

        this.getAllUser = function () {
            return this.list;
        };
    })
    .controller('UserController', ['UserService', function (UserService) {
        var vm = this;

        vm.users = UserService.getAllUser();
        vm.userToCreate = {name: null, lastName: null};

        vm.addUser = function () {
            UserService.addUser({name: vm.userToCreate.name, lastName: vm.userToCreate.lastName});
            vm.userToCreate = {name: null, lastName: null};
        };
        return vm;
    }]);
