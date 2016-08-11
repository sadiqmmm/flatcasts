function Voting($scope, $http, Lecture, $stateParams, GetLectureService) {
    $scope.lecture = {};
    var self = this;
    var lectureId = $stateParams.id;

    function updateVote() {
      this.lecture = GetLectureService
        .getLecture(lectureId)
        .then(function (res) {
          $scope.lecture = res.data;
        })
    }

    updateVote();

    $scope.upVote = function() {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/up_vote',
     })
     updateVote();
    };

    $scope.downVote = function() {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/down_vote',
     })
     updateVote();
    };
};

Voting.$inject = ['$scope', '$http', 'Lecture', '$stateParams', 'GetLectureService'];

angular.module('Flatcasts').controller('Voting', Voting);
