'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {
        var init = function init() {
            $(".gridster ul").gridster({
                widget_margins: [10, 10],
                widget_base_dimensions: [140, 140],
                resize: {
                    enabled: true
                }
            });
        };

        var getImages = function() {
            $http.get('/images').success(function ( res ) {
                $scope.images = res;
            });
        };

        init();
        getImages();
    }]);