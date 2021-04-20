import React from 'react';
import { Link } from 'react-router-dom';

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
            </ul>
        </>
    );
};
export default Home;
