function AddFavoriteService($http, GetLectureService) {

    this.voteCount = function(lectureId, $scope) {
      this.lecture = GetLectureService
        .getLecture(lectureId)
        .then(function (res) {
          $scope.lecture = res.data;
        })
    }

    this.upVote = function(lectureId, $scope) {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/up_vote',
     })
     this.voteCount(lectureId, $scope);
    };

    this.downVote = function(lectureId, $scope) {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/down_vote',
     })
     this.voteCount(lectureId, $scope);
    };
}

AddFavoriteService.$inject = ['$http', 'GetLectureService']

angular.module('Flatcasts').service('AddFavoriteService', AddFavoriteService);
