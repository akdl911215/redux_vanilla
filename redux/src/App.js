import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Counter, CounterSlice, CounterContainer, CounterSliceContainer } from 'counter/index';
// import Counter from '../src/counter/component/Counter';
// import CounterContainer from '../src/counter/reducer/Counter.reducer';
import { Home } from 'common/index';
import { Todos, TodoApp } from 'todos/index';
const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/counter/component/counter" component={Counter} />
            <Route exact path="/counter/component/counter-slice" component={CounterSlice} />
            <Route exact path="/counter/container/counter-container" component={CounterContainer} />
            <Route exact path="/counter/container/counter-slice-container" component={CounterSliceContainer} />

            <Route exact path="/todos/component/todos" component={Todos} />
            <Route exact path="/todos/container/todo-app" component={TodoApp} />
        </>
    );
};

export default App;
