import React from 'react';
import { AddTodo, Todos, CompletedTodo } from 'todos/index';

const TodoApp = () => {
    //Problem: user interaction doesn't provide desired results
    //Solution: add interactivity so the user can manage daily tasks.

    var taskInput = document.getElementById('new-task'); // new-task
    var addButton = document.getElementsByTagName('button')[0]; //first button
    var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
    var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks

    //New Task List item

    const createNewTaskElement = (taskString) => {
        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        const label = document.createElement('label');
        const editInput = document.createElement('input');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        checkBox.type = 'checkBox';
        editInput.type = 'text';
        editButton.innerText = 'Edit';
        editButton.className = 'edit';
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete';
        label.innerText = taskString;
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        return listItem;
    };

    return (
        <>
            <div className="TodoContainer todo">
                <AddTodo />
                <Todos />
                <CompletedTodo />
            </div>
        </>
    );
};
export default TodoApp;
