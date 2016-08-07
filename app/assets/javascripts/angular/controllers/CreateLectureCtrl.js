function CreateLectureCtrl($scope, $http, $location, $window) {
    $scope.lecture = {};

    $scope.submitForm = function() {
    $http({
      method  : 'POST',
      url     : '/api/lectures',
      data    : { data: $scope.lecture }
     })
      .success(function(data) {
          $scope.lecture = data.lecture;
          if (data.id === null) {
            
            $window.location.href = '/#/lectures';
          } else {
            $location.path('/lectures/' + data.id)
          }
        })
    };
};

CreateLectureCtrl.$inject = ['$scope', '$http', '$location', '$window'];

angular.module('Flatcasts').controller('CreateLectureCtrl', CreateLectureCtrl);
