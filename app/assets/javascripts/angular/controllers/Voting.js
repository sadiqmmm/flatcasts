function Voting($scope, $http, Lecture, $stateParams, GetLectureService) {
    $scope.lecture = {};
    var self = this;
    var lectureId = $stateParams.id;

    this.lecture = GetLectureService
      .getLecture(lectureId)
      .then(function (res) {
        $scope.lecture = res.data;
      })

    $scope.upVote = function() {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/up_vote',
     })
     this.lecture = GetLectureService
       .getLecture(lectureId)
       .then(function (res) {
         $scope.lecture = res.data;
         $scope.lectureEmbed = $scope.lecture.video_id;
       })
    };

    $scope.downVote = function() {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/down_vote',
     })
     this.lecture = GetLectureService
       .getLecture(lectureId)
       .then(function (res) {
         $scope.lecture = res.data;
         $scope.lectureEmbed = $scope.lecture.video_id;
       })
    };
};

Voting.$inject = ['$scope', '$http', 'Lecture', '$stateParams', 'GetLectureService'];

angular.module('Flatcasts').controller('Voting', Voting);
