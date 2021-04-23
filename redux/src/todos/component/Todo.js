import React from 'react';
import { useDispatch } from 'react-redux';
import { delTodo } from 'todos/reducer/todo.reducer';

const Todo = ({ todo, delTodo, toggleTodo }) => {
    console.log('JSON.stringify(todo) = ' + JSON.stringify(todo));
    console.log('todo.text = ' + todo.text);
    console.log('JSON.stringify(todo.text) = ' + JSON.stringify(todo.text));

    const dispatch = useDispatch();

    const deleteClick = () => {
        // alert(`${todo.id}번 게시물을 삭제합니다`);
        dispatch(delTodo(todo.id));
    };

    const toggleClick = () => {
        alert('toggleTodo(todo.id) = ' + todo.id);
        alert(JSON.stringify(todo.id));
        dispatch(toggleTodo(todo.id));
    };

    return (
        <div style={{ width: 600 }}>
            <input type="checkbox" style={{ width: 100 }} onClick={toggleClick} />
            <span style={{ width: 400 }}>{todo.id}번 게시물:</span>
            {todo.done ? (
                <del>
                    <span style={{ width: 400 }}> {todo.text} </span>
                </del>
            ) : (
                <span style={{ width: 400 }}> {todo.text} </span>
            )}
            <button onClick={deleteClick} style={{ width: 100, backgroundColor: 'red' }}>
                삭제
            </button>
        </div>
    );
};
export default Todo;
