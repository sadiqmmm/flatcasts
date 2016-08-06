this.CreateLectureCtrl = function($scope, $location, lectureData) {
  $scope.data = lectureData.data;
  lectureData.loadLectures();
  $scope.formData = {
    newLectureUrl: '',
    newLectureTopic: ''
  };
  $scope.navNewLecture = function() {
    return $location.url('/lectures/create');
  };
  return $scope.navHome = function() {
    return $location.url('/');
  };
};

this.CreateLectureCtrl.$inject = ['$scope', '$location', 'lectureData'];
