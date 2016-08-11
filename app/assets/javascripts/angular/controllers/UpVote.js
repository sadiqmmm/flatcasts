function UpVote($scope, $http, Lecture, $stateParams) {
    $scope.lecture = {};
    var self = this;
    var lectureId = $stateParams.id;

    $scope.submitForm = function() {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/vote',
     })
    };
};

UpVote.$inject = ['$scope', '$http', 'Lecture', '$stateParams'];

angular.module('Flatcasts').controller('UpVote', UpVote);
