"use strict";

describe("TaskListController", function() {

    var scope, controller;

    beforeEach(function() {
        scope = {};
        controller = new TaskListController(scope);
    });

    it("should add a new task", function() {
        var task;

        task = { title: "New task" };

        expect(scope.tasks.length).toEqual(0);

        scope.addTask(task);
        expect(scope.tasks.length).toEqual(1);
    });

    it("should remove a task", function() {
        var task;

        task = { title: "New task" };

        scope.tasks.push(task);
        expect(scope.tasks.length).toEqual(1);

        scope.removeTask(task);
        expect(scope.tasks.indexOf(task)).toEqual(-1);
    });

    it("should set a task done", function() {
        var task;

        task = {
            title: "New task",
            done: false
        };
        
        scope.tasks.push(task);
        expect(scope.tasks.length).toEqual(1);
        expect(scope.tasks[scope.tasks.indexOf(task)].done).toEqual(false);
                
        scope.toggleTaskStatus(task);
        
        expect(scope.tasks[scope.tasks.indexOf(task)].done).toEqual(true);
    });

    it("should match duration shortcut pattern '1h 25m'", function() {
        var task, matchedInput;
        task = "New task 1h 25m";

        matchedInput = controller.matchPattern(task);

        expect(matchedInput[0]).toEqual(" 1h 25m");
        expect(matchedInput[1]).toEqual(" 1h");
        expect(matchedInput[2]).toEqual(" 25m");
    });

    it("should get task title 'New task'", function() {
        var task, title;

        task = "New task 1h 25m";
        title = controller.getTitle(function(str) {
            return str.match(/(\s*[0-9]+h)?(\s*[0-9]+m)?$/);
        }, task);

        expect(title).toEqual("New task");
    });

    it("should get task duration in minutes '85'", function() {
        var task, duration;

        task = "New task 1h 25m";
        duration = controller.getDuration(function(str) {
            return str.match(/(\s*[0-9]+h)?(\s*[0-9]+m)?$/);
        }, task);

        expect(duration).toEqual(85);
    });

    it("should remove task with empty title after editing", function() {
        var task;

        task = {
            title: "Task",
            duration: 15
        };

        scope.tasks.push(task);

        expect(scope.tasks.indexOf(task)).toEqual(0);

        task.title = "";

        scope.editTask(task);

        expect(scope.tasks.length).toEqual(0);
    });

    it("should change task duration from 15m to 30m", function() {
        var task;

        task = {
            title: "Task",
            duration: 15
        }

        scope.tasks.push(task);

        expect(scope.tasks.indexOf(task)).toEqual(0);

        task.title = "Task 30m";

        scope.editTask(task);

        expect(task.duration).toEqual(30);
    });

});
