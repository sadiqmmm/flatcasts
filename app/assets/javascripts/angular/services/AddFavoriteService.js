function AddFavoriteService($http, GetLectureService) {

    this.addFavorite = function(lectureId, $scope) {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/up_vote',
     })
     this.voteCount(lectureId, $scope);
    };
}

AddFavoriteService.$inject = ['$http', 'GetLectureService']

angular.module('Flatcasts').service('AddFavoriteService', AddFavoriteService);
