(function(){
    'use strict';

    angular
        .module('searchComponent', [])
        .component('searchComponent', {
            controllerAs: 'search',
            templateUrl: './components/search-component/search-component.html',
            bindings: {
                formData: '=',
                createTodo: '&'
            }
    })

})();

