var app = angular.module('lab12', []);

 app.controller('labController', function($scope){

   $scope.toDoList = [];

   $scope.addTask = function(newTask){
            var localTask = {name: newTask.name};
             console.log(newTask.name);
             $scope.toDoList.push(localTask);
             $scope.task.name = '';
             console.log($scope.toDoList);

           }

    $scope.removeTask = function(task){

          $scope.toDoList.splice(index, 1);
    }

 });
