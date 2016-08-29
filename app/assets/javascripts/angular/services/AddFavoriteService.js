function AddFavoriteService($http, GetLectureService) {

    this.addFavorite = function(lectureId, $scope) {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/add_favorite',
     })
    };
}

AddFavoriteService.$inject = ['$http', 'GetLectureService']

angular.module('Flatcasts').service('AddFavoriteService', AddFavoriteService);
