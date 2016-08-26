function UserCtrl($scope, $http, $stateParams, GetUserService) {
  var userId = $stateParams.id;

  this.user = GetUserService.getUser(userId);
  GetUserService
    .getUser(userId)
    .then(function (res) {
      debugger;
      $scope.user = res.data;
      $scope.userEmbed = $scope.user.video_id;
    })
};

UserCtrl.$inject = ['$scope', '$http', '$stateParams', 'GetUserService'];

angular.module('Flatcasts').controller('UserCtrl', UserCtrl);
