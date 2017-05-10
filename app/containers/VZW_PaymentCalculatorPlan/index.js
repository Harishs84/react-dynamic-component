/*
 * PaymentCalculator Page
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VZW_PaymentCalculatorPlan  from 'components/VZW_PaymentCalculatorPlan';
import { fetchPaymentDetailsData, addADevice } from 'containers/GetInitialResource/actions';


const mapStateToProps = (state)=> {
	
	const data = state.toJS();
	console.log(data);
	return {
		inprogress: data.getInitialReducer.activeTab
	};
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPaymentDetailsData,
    addADevice
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VZW_PaymentCalculatorPlan);
