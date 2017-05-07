(function () {
'use strict';

angular.module('MenuApp')

.component('categories',{
  templateUrl: 'presentation/categories.template.html',
  bindings: {
    items: '<'
  }
})

})();
