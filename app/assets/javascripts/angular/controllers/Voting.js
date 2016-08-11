function Voting($scope, $http, Lecture, $stateParams) {
    $scope.lecture = {};
    var self = this;
    var lectureId = $stateParams.id;

    $scope.upVote = function() {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/up_vote',
     })
    };

    $scope.downVote = function() {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/down_vote',
     })
    };
};

Voting.$inject = ['$scope', '$http', 'Lecture', '$stateParams'];

angular.module('Flatcasts').controller('Voting', Voting);
