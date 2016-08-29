function Favoriting($scope, $http, Lecture, $stateParams, GetLectureService, AddFavoriteService) {
    $scope.lecture = {};
    var self = this;
    var lectureId = $stateParams.id;

    $scope.addFavorite = function() {
      AddFavoriteService
        .addFavorite(lectureId, $scope)
    };

};

Favoriting.$inject = ['$scope', '$http', 'Lecture', '$stateParams', 'GetLectureService', 'AddFavoriteService'];

angular.module('Flatcasts').controller('Favoriting', Favoriting);
