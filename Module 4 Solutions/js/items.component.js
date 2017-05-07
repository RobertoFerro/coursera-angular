(function () {
'use strict';

angular.module('MenuApp')

.component('item',{
  templateUrl: 'presentation/item.template.html',
  bindings: {
    menuItems: '<'
  }
});

})();