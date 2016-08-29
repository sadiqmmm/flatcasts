function Favoriting($scope, $http, Lecture, $stateParams, FavoriteService) {
    $scope.lecture = {};
    var self = this;
    var lectureId = $stateParams.id;
    var userId = current_user.id

    FavoriteService
      .isFavorited(lectureId, $scope, userId)

    $scope.addFavorite = function() {
      FavoriteService
        .addFavorite(lectureId, $scope, userId)
    };

};

Favoriting.$inject = ['$scope', '$http', 'Lecture', '$stateParams', 'FavoriteService'];

angular.module('Flatcasts').controller('Favoriting', Favoriting);
