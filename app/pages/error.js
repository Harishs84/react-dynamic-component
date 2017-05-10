// Needed for redux-saga es6 generator support
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import ErrorScreen from 'containers/ErrorScreen';
import { getPublicPath } from 'base';

__webpack_public_path__ = getPublicPath();

ReactDOM.render(
    <ErrorScreen />,
    document.getElementById('app')
);