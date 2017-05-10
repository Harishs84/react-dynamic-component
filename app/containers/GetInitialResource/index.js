/*
 * PaymentCalculator Page
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectPaymentCalcConfig from './selectors';
import GetInitialResource  from 'components/GetInitialResource';
import { fetchPaymentDetailsData, resposonseLoaded, addADevice } from './actions';


const mapStateToProps = selectPaymentCalcConfig();


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPaymentDetailsData,
    resposonseLoaded,
    addADevice
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GetInitialResource);
