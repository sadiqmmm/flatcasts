function LectureCtrl($scope, $http, $stateParams, GetLectureService) {
  var lectureId = $stateParams.id;

  this.lecture = GetLectureService
    .getLecture(lectureId)
    .then(function (res) {
      $scope.lecture = res.data;
      $scope.lectureEmbed = $scope.lecture.video_id;
    })
};

LectureCtrl.$inject = ['$scope', '$http', '$stateParams', 'GetLectureService'];

angular.module('Flatcasts').controller('LectureCtrl', LectureCtrl);
