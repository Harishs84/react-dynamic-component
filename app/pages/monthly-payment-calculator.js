// Needed for redux-saga es6 generator support
import 'babel-polyfill';


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store';


import { getAsyncInjectors } from '../utils/asyncInjectors';
import { getPublicPath } from 'base';

__webpack_public_path__ = getPublicPath();

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    cb(null, componentModule.default);
};

const initialState = {};
const store = configureStore(initialState, browserHistory);

const { injectReducer, injectSagas } = getAsyncInjectors(store);

import { selectLocationState } from 'containers/App/selectors';
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: selectLocationState(),
});

const renderComp = () => {
    render(
        <Provider store={store}>
            <Router
                history={history}
                routes={{
                    childRoutes: [
                        {
                            path: '*',
                            name: 'paymentCalculatorContainer',
                            getComponent(nextState, cb) {
                                const importModules = Promise.all([
                                    System.import('containers/paymentCalculatorContainer/reducer'),
                                    System.import('containers/paymentCalculatorContainer/sagas'),
                                    System.import('containers/paymentCalculatorContainer'),
                                ]);
                                const renderRoute = loadModule(cb);
                                importModules.then(([reducer, sagas, component]) => {
                                    injectReducer('paymentCalculatorContainer', reducer.default);
                                    injectSagas(sagas.default);
                                    renderRoute(component);
                                });
                                importModules.catch(errorLoading);
                            },
                        }]
                }}
            />
        </Provider>,
        document.getElementById('app')
    );
};

renderComp();