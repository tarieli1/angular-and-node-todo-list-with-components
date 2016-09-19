(function(){
    'use strict';

    angular
        .module('appComponent', ['headerComponent', 'listComponent', 'searchComponent'])
        .component('appComponent', {
            controllerAs: 'app',
            templateUrl: './components/app-component/app-component.html',
            bindings: {
                todos: '<',
                formData: '=',
                deleteTodo: '&',
                createTodo: '&'
            }
    })

})();

