// Functions - Definitions
function FilterByTopic() {
  // Variables - Private
  var self = this;

  // Variables - Public
  self.filter = {};
  self.wines = [
    {name: 'Wine A', category: 'red'},
    {name: 'Wine B', category: 'red'},
    {name: 'Wine C', category: 'white'},
    {name: 'Wine D', category: 'red'},
    {name: 'Wine E', category: 'red'},
    {name: 'Wine F', category: 'white'},
    {name: 'Wine G', category: 'champagne'},
    {name: 'Wine H', category: 'champagne'}
  ];

  // Functions - Public
  self.filterByCategory = filterByCategory;
  self.getCategories = getCategories;

  // Functions - Definitions
  function filterByCategory(wine) {
    return self.filter[wine.category] || noFilter(self.filter);
  }

  function getCategories() {
    return (self.wines || []).
      map(function (wine) { return wine.category; }).
      filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
};

angular.module('Flatcasts').service('FilterByTopic', FilterByTopic);
