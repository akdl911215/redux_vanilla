import React from 'react';
import { useSelector } from 'react-redux';
import { AddTodo, Todos, CompletedTodo } from 'todos/index';
import { addTodo } from 'todos/reducer/todo.reducer';

const TodoApp = () => {
    const todos = useSelector((state) => state.todoReducer);

    return (
        <>
            <div style={{ marginTop: 100 }}>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} />
            </div>
        </>
    );
};
export default TodoApp;
