App.controller('LecturesCtrl', [
  '$scope', 'Lecture', function($scope, Lecture) {
    return $scope.lectures = Lecture.query();
  }
]);
