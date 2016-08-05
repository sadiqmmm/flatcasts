function Lecture($resource) {
    return $resource('/api/lectures/:id', {
      id: '@id'
    });
  };

angular.module('Flatcasts').factory('Lecture', Lecture);
