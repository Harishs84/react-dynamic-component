/* global document window */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';

import 'es6-promise/auto';
import components from 'components';

import { getAsyncInjectors } from './utils/asyncInjectors';
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

const renderClient = () => {
  const getComponentById = document.querySelectorAll('[id]');  

  Array.prototype.map.call(getComponentById, element => {
    const componentName = element.getAttribute('data-tmpl');
    const storeElem = element.getAttribute('data-store');
                       
    let renderData;
    // const props = JSON.parse(element.getAttribute('data-props'));  

    // console.log(componentName);

    if(componentName !== null) {
        components[componentName]().then(Component => {
         if(storeElem==="true") {
            renderData = (
              <Provider store={store}>
              <Router
                  history={history}
                  routes={{
                      childRoutes: [
                          {
                              path: '*',
                              name: componentName,
                              getComponent(nextState, cb) {
                                  const importModules = Promise.all([
                                      System.import(`containers/${componentName}/reducer`),
                                      System.import(`containers/${componentName}/sagas`),
                                      // https://github.com/webpack/webpack/issues/2401
                                      System.import(`containers/${componentName}/index.js`),
                                  ]);
                                  const renderRoute = loadModule(cb);
                                  importModules.then(([reducer, sagas, component]) => {
                                      injectReducer(componentName, reducer.default);
                                      injectSagas(sagas.default);
                                      renderRoute(component);
                                  });
                                  importModules.catch(errorLoading);
                              },
                          }]
                  }}
              />
          </Provider>
            )
          } else {
            renderData = (
              <Provider store={store}>
                <Component />
              </Provider>
            )
          }
        render(

          renderData, element
        );
      });
    }

    

  });
  
};

renderClient();
