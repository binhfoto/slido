import '../style/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {HashRouter} from 'react-router-dom';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import rootSaga from '../saga';
import rootReducer from '../reducer';

import Token from '../service/token';
import Header from './Header';
import Content from './Content';


const App = () => {

    const theme = createMuiTheme({
        palette: {
            primary: blue,
        },
    });

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
            <MuiThemeProvider theme={theme}>
                <HashRouter>
                    <div className="container">
                        <Header/>
                        <Content/>
                    </div>
                </HashRouter>
            </MuiThemeProvider>
        </Provider>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);