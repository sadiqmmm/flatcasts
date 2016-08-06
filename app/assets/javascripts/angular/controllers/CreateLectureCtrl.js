function CreateLectureCtrl($scope, $http) {
  // create a blank object to handle form data.
    $scope.lecture = {};
  // calling our submit function.
    $scope.submitForm = function() {
    $http({
      method  : 'POST',
      url     : '/api/lectures',
      data    : { data: $scope.lecture }
     })
      .success(function(data) {
        if (data.errors) {
          // Showing errors.
          $scope.errorContent = data.errors.errorContent;
        } else {
          $scope.lecture = data.lecture;
        }
      });
    };
};

CreateLectureCtrl.$inject = ['$scope', '$http']

angular.module('Flatcasts').controller('CreateLectureCtrl', CreateLectureCtrl);
