function LecturesCtrl($scope, Lecture) {
    $scope.lectures = Lecture.query();
  };

LecturesCtrl.$inject = ['$scope', 'Lecture'];

angular.module('Flatcasts').controller('LecturesCtrl', LecturesCtrl);
