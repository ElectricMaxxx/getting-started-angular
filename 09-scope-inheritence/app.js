angular.module("myModule", [])
    .controller('MyController', function () {
        var vm = this;
        vm.userName = 'ElectricMaxxx';
        vm.email = "Maximilian.Berghoff@mayflower.de";
        vm.name = '';

        vm.setName = function (name) {
            vm.name = name;
        };

        vm.setNameByForm = function () {
            var value = document.getElementById("name-value").value;
            vm.setName(value);
        };
    })
    .directive('myDirective', function () {
        return {
            restrict: "E",
            scope: {
                userNameInD: "@attrOneWay",
                emailInD: "=attrTwoWay",
                setName: "&attrFunctional"
            },
            templateUrl: "myDirective.tpl.html",
            controller: function ($scope) {
                $scope.name = '';

                $scope.setNameByForm = function () {
                    var value = document.getElementById("name-value-d").value;
                    $scope.name = value;
                    $scope.setName({value: value})
                };
            }
        };

    });
