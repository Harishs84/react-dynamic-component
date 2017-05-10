/*
* VZW_PaymentCalculatorAddDeviceBase Template
*/

import React, { Component, PropTypes } from 'react';

class VZW_PaymentCalculatorAddDeviceBase extends Component {
 	render() {
 		const { Inputs:{ StepNumber } } = this.props;
    	return(
    		<div >
	
    <div className="row margin-all-zero">
      <div className="columns panel margin-bottom-small padding-vert-tiny medium-padding-vert-small">
        <div className="margin-top-zero">
          <span className="vzicon circled vert-top bg-brand-3 small text-black-active text-xlarge margin-right-tiny bold" aria-hidden="true">{StepNumber}</span>
          <div className="inline-block p-80 large-p-80 margin-top-micro">
            <p className="bold text-xlarge margin-bottom-zero">Add your devices</p>
            <p className="margin-bottom-tiny">Select your device type and quantity to start your pricing estimate. You can add up to 5.</p>
          </div>
        </div>
        <div className="margin-top-small p-100 inline-block">
			<div className="left tiny-12 small-12 medium-5 large-3 medium-text-center">
				<a className="block" data-ufd-pathid="2" data-ufd-event-click >
          		<div className="padding-vert-small padding-horiz-medium customHorizPad bg-white border-all">
            		<span className="vzicon icon-plus-alt circled bg-grey-5 large text-black-active vert-middle margin-right-medium medium-margin-right-zero"></span>
            		<div className="margin-top-tiny inline-block medium-p-100">
              			<span className="button link-text text-line inline-block padding-horiz-zero medium-padding-top-tiny text-large">Add a device</span>
            		</div>
          		</div>
				</a>
				
			</div>
        </div>
      </div>
    </div>
    </div>



    		)
	}
}


export default VZW_PaymentCalculatorAddDeviceBase;
