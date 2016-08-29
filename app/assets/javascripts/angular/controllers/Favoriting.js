function Favoriting($scope, $http, Lecture, $stateParams, AddFavoriteService) {
    $scope.lecture = {};
    var self = this;
    var lectureId = $stateParams.id;
    var userId = current_user.id

    $scope.addFavorite = function() {
      AddFavoriteService
        .addFavorite(lectureId, $scope, userId)
    };

};

Favoriting.$inject = ['$scope', '$http', 'Lecture', '$stateParams', 'AddFavoriteService'];

angular.module('Flatcasts').controller('Favoriting', Favoriting);
