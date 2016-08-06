function GetLectureService($http) {
  this.getLecture = function (id) {
    return $http.get('/api/lectures/' + id)
  }
}

angular.module('Flatcasts').service('GetLectureService', GetLectureService);
