/**
 * Created by guptvi5 on 3/15/2017.
 */

import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import Poc from 'containers/Poc';
import { getJsonVar, getPublicPath } from 'base';

__webpack_public_path__ = getPublicPath();

ReactDOM.render(
    <Poc />,
    document.getElementById('app')
);