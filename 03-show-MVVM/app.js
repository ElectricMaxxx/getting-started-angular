angular.module('myModule', []);

angular.module('myModule')
    .controller('UserController', function ($scope) {
        $scope.user = {
            name: 'Max',
            lastName: 'Mustermann'
        };
    });
