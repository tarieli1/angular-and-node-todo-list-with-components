(function(){
    'use strict';

    angular
        .module('listComponent', [])
        .component('listComponent', {
            controllerAs: 'list',
            templateUrl: './components/list-component/list-component.html',
            bindings: {
                todos: '<',
                deleteTodo: '&'
            }
    })

})();

