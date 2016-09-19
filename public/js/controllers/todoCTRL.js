(function(){
    'use strict';

    angular
        .module('todoController', ['todoService'])
        .controller('todoController', todoController);

    function todoController(todoService){

        var vm = this;
        vm.todos = [];
        vm.formData = {};
        vm.createTodo = createTodo;
        vm.deleteTodo = deleteTodo;
        vm.getAllTodos = getAllTodos;

        vm.getAllTodos();

        function getAllTodos(){
            todoService.getAllTodos()
                .then(function(data){
                    vm.todos = data;
                }, function(error){
                    console.log('Error: ' + error);
                })
        }

        function createTodo(){
            if(vm.formData !== null && vm.formData !== ''){
                todoService.createTodo(vm.formData)
                    .then(function(data){
                        vm.formData = {};
                        vm.todos = data;
                    }, function(error){
                        console.log('Error: ' + error);
                    })
            }
        }

        function deleteTodo(id){
            todoService.deleteTodo(id)
                .then(function(data){
                        vm.todos = data;
                    }, function(error){
                        console.log('Error: ' + error);
                    })
        }
    }

})();