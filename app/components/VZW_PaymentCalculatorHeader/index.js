/*
* VZW_PaymentCalculatorHeader Template
*/

import React, { Component, PropTypes } from 'react';
import 'es6-promise/auto';

class VZW_PaymentCalculatorHeader extends Component {

 	render() {
 		const { Inputs:{ MainHeader, SubHeader } } = this.props;
    	return(
    		<div data-form="" className="form" data-parsley-validate="" data-ufd-id="8e23af7c-23b6-4ee2-b315-5a61f1035dc5------ufd------0">
		
		
		<div className="row margin-all-zero">
			<div className="columns">
				<div className="p-100 inline-block">
					<h3 className="margin-bottom-micro left p-80 medium-p-100">{MainHeader}</h3>
						<div className="right margin-top-small hide-for-medium-up">
						
						add
						
						</div>
				</div>
					<p className="bold text-large margin-bottom-tiny">{SubHeader}</p>

			</div>
		</div>

    </div>
    		)
	}
}

export default VZW_PaymentCalculatorHeader
