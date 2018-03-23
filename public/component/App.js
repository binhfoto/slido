import '../style/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {HashRouter} from 'react-router-dom';

import rootSaga from '../saga';
import rootReducer from '../reducer';

import Token from '../service/token';
import Header from './Header';
import Content from './Content';


const App = () => {

    const initialState = {
        isSignedIn: !Token.get() ? false : true
    };

    // only enable in development mode, ENABLE_REDUX_DEV_TOOL is config in webpack
    const composeEnhancers = Boolean(ENABLE_REDUX_DEV_TOOL) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

    const sagas = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagas)));

    sagas.run(rootSaga);

    return (
        <Provider store={store}>
            <HashRouter>
                <div className="container">
                    <Header/>
                    <Content/>
                </div>
            </HashRouter>
        </Provider>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);