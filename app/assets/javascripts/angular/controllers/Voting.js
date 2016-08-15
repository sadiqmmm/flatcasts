function Voting($scope, $http, Lecture, $stateParams, GetLectureService, UpdateVoteService) {
    $scope.lecture = {};
    var self = this;
    var lectureId = $stateParams.id;

    UpdateVoteService
      .voteCount(lectureId, $scope)

    $scope.upVote = function() {
      UpdateVoteService
        .upVote(lectureId, $scope)
    };

    $scope.downVote = function() {
      UpdateVoteService
        .downVote(lectureId, $scope)
    };
};

Voting.$inject = ['$scope', '$http', 'Lecture', '$stateParams', 'GetLectureService', 'UpdateVoteService'];

angular.module('Flatcasts').controller('Voting', Voting);
