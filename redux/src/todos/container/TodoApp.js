import React from 'react';
import { useSelector } from 'react-redux';
import { AddTodo, Todos, CompletedTodo } from 'todos/index';
import { addTodo, delTodo, delTodos, toggleTodo } from 'todos/reducer/todo.reducer';

const TodoApp = () => {
    const todos = useSelector((state) => state.todos);
    alert(`>>>>>>>>>>>222 ` + JSON.stringify(todos));
    alert(`>>>>>>>>>>>111 ` + JSON.stringify(useSelector));

    return (
        <>
            <div style={{ marginTop: 100 }}>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} delTodo={delTodo} delTodos={delTodos} toggleTodo={toggleTodo} />
            </div>
        </>
    );
};
export default TodoApp;
