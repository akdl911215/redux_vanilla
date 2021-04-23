import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from 'todos/index';
const Todos = ({ todos, delTodo, delTodos, toggleTodo }) => {
    alert('>>>>>>>>>>>>>>>3' + JSON.stringify(todos));
    const dispatch = useDispatch();
    const dleteAllClick = () => {
        alert(`모든 게시물을 삭제합니다 + dispatch(delTodos(0))`);
        dispatch(delTodos(0));
    };

    return (
        <>
            <h3>할일 목록</h3>
            <button style={{ width: 100, backgroundColor: 'grren' }} onClick={dleteAllClick}>
                전체삭제
            </button>
            <div>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} delTodo={delTodo} toggleTodo={toggleTodo} />
                ))}
            </div>
        </>
    );
};
export default Todos;
