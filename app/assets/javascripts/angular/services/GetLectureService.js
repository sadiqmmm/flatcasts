function GetLectureService($http) {
  this.getLecture = function (id) {
    return $http.get('/api/lectures/' + id)
  }
};

GetLectureService.$inject = ['$http'];

angular.module('Flatcasts').service('GetLectureService', GetLectureService);
