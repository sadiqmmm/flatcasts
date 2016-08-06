function LecturesCtrl($scope, Lecture) {
    $scope.lectures = Lecture.query();
    $scope.selectedLecture = null;
    return $scope.showLecture = function(lecture) {
      $scope.lectureEmbed = lecture.video_id;
      return $scope.selectedLecture = lecture;
    };
  };

LecturesCtrl.$inject = ['$scope', 'Lecture', 'lecture'];

angular.module('Flatcasts').controller('LecturesCtrl', LecturesCtrl);
