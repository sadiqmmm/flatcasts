function LecturesCtrl($scope, Lecture) {
  // Variables - Private
  var self = this;

  // Variables - Public
  self.filter = {};

  self.lectures = Lecture.query();

  // Functions - Public
  self.filterByTopic = filterByTopic;
  self.getTopics = getTopics;

  // Functions - Definitions
  function filterByTopic(lecture) {
    return self.filter[lecture.topic] || noFilter(self.filter);
  }

  function getTopics() {
    return (self.lectures || []).
      map(function (lecture) { return lecture.topic; }).
      filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
};

LecturesCtrl.$inject = ['$scope', 'Lecture'];

angular.module('Flatcasts').controller('LecturesCtrl', LecturesCtrl);
