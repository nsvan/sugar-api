(function () {
    'use strict';

    angular.module("flickr-app", [])
        .controller("mainController", ['$scope', '$http', function ($scope, $http) {

            $scope.results = [];

            $scope.search = function () {
                $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest',
                    params: {
                        method: 'flickr.photos.search',
                        api_key: 'cb217fe3323504374009dc7ee60d97c0',
                        text: $scope.searchTerm,
                        format: 'json',
                        group_id: '72296557@N00',
                        nojsoncallback: 1,
                        per_page:40
                    }
                }).success(function (data) {
                    $scope.results = data;
                }).error(function (error) {
                    console.error(error);
                });
            }
        }]);
}());