import React from 'react';

const Todo = ({ todo }) => {
    console.log('todo = ' + todo);
    console.log('todo.text = ' + todo.text);

    return (
        <div style={{ width: 600 }}>
            <input type="checkbox" style={{ width: 100 }} />
            <span style={{ width: 400 }}> {todo.text} </span>
            <button style={{ width: 100, backgroundColor: 'red' }}>삭제</button>
        </div>
    );
};
export default Todo;
