/// <reference path="../../typings/angularjs/angular.d.ts"/>

angular.module('sample', ['winjs']).controller("sampleController", function ($scope) {
    $scope.rating = 1;
    $scope.maxRating = 5;
});
