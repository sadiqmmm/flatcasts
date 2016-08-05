App.controller('LecturesCtrl', [
  '$scope', 'Lecture', function($scope, Lecture) {
    $scope.lectures = Lecture.query();
    $scope.selectedLecture = null;
    return $scope.showLecture = function(lecture) {
      $scope.lectureEmbed = lecture.video_id;
      return $scope.selectedLecture = lecture;
    };
  }
]);
