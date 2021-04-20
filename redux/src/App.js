import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Counter, CounterContainer } from 'counter/index';
// import Counter from '../src/counter/component/Counter';
// import CounterContainer from '../src/counter/reducer/Counter.reducer';
import { Home } from 'common/index';
const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/counter/component/counter" component={Counter} />
            <Route exact path="/counter/container/counter-container" component={CounterContainer} />
        </>
    );
};

export default App;
