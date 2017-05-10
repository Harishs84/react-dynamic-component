/*
 *
 * ErrorPage
 *
 */

import React, { Component } from 'react';
import { getJsonVar } from 'base';

import ErrorPage from './../../common/ErrorPage';

const errorPageJson = window[getJsonVar('errorScreen')];

export default class ErrorScreen extends Component { // eslint-disable-line react/prefer-stateless-function
	render() {
		const {errorTitle, errorDesc, buttonLabel, redirectUrl} = errorPageJson;
		return (
			<ErrorPage errorTitle={errorTitle} errorDesc={errorDesc} ctaLabel={buttonLabel} ctaLink={redirectUrl} />
		);
	}
}
