App.controller('LecturesCtrl', [
  '$scope', 'Lecture', function($scope, Lecture) {
    $scope.lectures = Lecture.query();
    $scope.selectedLecture = null;
    return $scope.showLecture = function(lecture) {
      return $scope.selectedLecture = lecture;
    };
  }
]);
