import React from 'react';
import { Link } from 'react-router-dom';
import 'todos/style/TodoStyle.css';

const Home = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/counter/component/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/counter/container/counter-container">CounterContainer</Link>
                </li>
                <li>
                    <Link to="/counter/container/counter-slice-container">CounterSliceContainer</Link>
                </li>
                <li>
                    <Link to="/todos/component/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/todos/container/todo-app">TodoApp</Link>
                </li>
            </ul>
        </>
    );
};
export default Home;
