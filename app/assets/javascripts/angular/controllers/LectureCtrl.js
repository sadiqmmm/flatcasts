function LectureCtrl($scope, $http, $stateParams, GetLectureService) {
  var lectureId = $stateParams.id;

  this.lecture = GetLectureService.getLecture(lectureId);
  GetLectureService
    .getLecture(lectureId)
    .then(function (res) {
      $scope.lecture = res.data;
      $scope.lectureEmbed = $scope.lecture.video_id;
    })
}

angular.module('Flatcasts').controller('LectureCtrl', LectureCtrl);
