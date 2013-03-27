/*global
    angular
*/

(function(angular) {
    "use strict";

    // TaskListController
    function TaskListController($scope) {
        var self = this,
            tasks = $scope.tasks = [];

        $scope.addTask = function(task) {
            var title, duration;

            if (!task) { return; }

        tasks.push({
            title: title,
            description: "...",
            duration: duration,
            done: false
        });

            tasks.push({
                title: title,
                duration: duration,
                done: false
            });

    $scope.removeTask = function(task) {
        tasks.splice(tasks.indexOf(task), 1);
    };

        $scope.removeTask = function(task) {
            tasks.splice(tasks.indexOf(task), 1);
        };

        $scope.toggleTaskStatus = function(task) {
            task.done = !task.done;
        };
    }

    TaskListController.$inject = ["$scope"];


    // Prototype functions
    TaskListController.prototype.matchPattern = function (str) {
        return str.match(/(\s*[0-9]+h)?(\s*[0-9]+m)?$/);
    };

// inject needed services
TaskListController.$inject = ["$scope"];

        matchedInput = matcher(str);

// prototype functions
TaskListController.prototype.matchPattern = function (str) {
    return str.match(/(\s*[0-9]+h)?(\s*[0-9]+m)?$/);
};

        return title;
    };

    TaskListController.prototype.getDuration = function(matcher, str) {
        var matchedInput, duration, h, m;

        matchedInput = matcher(str);

        duration = 0;

        if (matchedInput[1]) {
            h = parseInt(matchedInput[1].replace(/\s|h/, ""), 10);
            duration = h * 60;
        }

        if (matchedInput[2]) {
            m = parseInt(matchedInput[2].replace(/\s|m/, ""), 10);
            duration += m;
        }

        return duration;
    };


    angular.module("Controllers", []).
        controller("TaskListController", TaskListController);

}(angular));
