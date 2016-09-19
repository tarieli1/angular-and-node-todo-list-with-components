(function(){
    'use strict';

    angular
        .module('headerComponent', [])
        .component('headerComponent', {
            controllerAs: 'header',
            templateUrl: './components/header-component/header-component.html',
            bindings: {
                todos: '<'
            }
    })

})();

