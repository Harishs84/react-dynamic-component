/*
* VZW_PaymentCalculatorCart Template
*/

import React, { Component, PropTypes } from 'react';
import 'es6-promise/auto';

class VZW_PaymentCalculatorCart extends Component {

 	render() {
 		const { Inputs:{ MainHeader, SubHeader } } = this.props;
    	return (
    		<div data-form="" className="form" data-parsley-validate="" data-ufd-id="8e23af7c-23b6-4ee2-b315-5a61f1035dc5------ufd------0">
			<div className="row margin-all-zero" id="cartPage">
			<div className="columns" id="cartPage">
				<div className="panel bg-brand-3-pale cartRow1 cartInfo p-100 margin-top-zero medium-margin-vert-zero">
					<p className="margin-bottom-small bold text-xlarge">Due monthly</p>
					<ul className="w_list-control  m_rev" data-list-control="">
					

					
						<p className="margin-bottom-zero text-medium">For more accurate pricing, first add your devices then choose your monthly data.</p>
					

					

				</ul></div>
			</div>
		</div>

		<div className="row margin-all-zero">
			<div className="columns">
				<div className="panel bg-brand-2-pale cartRow2 cartInfo p-100 margin-top-zero medium-margin-vert-zero">
					<p className="margin-bottom-small bold text-xlarge">Due today</p>
					
					
					
					
					
						<p className="margin-bottom-zero text-medium">Sales tax may be due at time of checkout for new device purchases.</p>
					
				</div>
			</div>
		</div>

		<div className="row margin-all-zero">
			<div className="columns">
				<div className="panel bg-grey-5 cartRow3 p-100 margin-top-zero medium-margin-vert-zero">
					<p className="margin-bottom-small bold text-xlarge">Other</p>
					
						<div className="p-100 inline-block">
						<p className="left margin-bottom-zero">One-time activation fee of $30.00 per device. </p>
						</div>
					
				</div>
			</div>
		</div>


		<div className="row margin-all-zero">
			
				<div className="columns">
					<a id="checkoutclick1" className="button p-100 customBtn" data-tabindex="0" role="button" data-ufd-pathid="5">Checkout</a>
				</div>
			
		</div>

		<div className="row margin-top-tiny margin-vert-zero">
		</div>
		<div className="row margin-all-zero">
			<div className="columns">
				<a className="button p-100 customBtn bg-grey-2" data-tabindex="0" role="button" data-ufd-pathid="6">Continue shopping</a>
			</div>
		</div>
		

	</div>	
    	)
	}
}

export default VZW_PaymentCalculatorCart;
