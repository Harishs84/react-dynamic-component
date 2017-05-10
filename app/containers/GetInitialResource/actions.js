/*
 *
 * BYODConfig actions
 *
 */

import {
	PAYMENTCALC_DATA,
	LOAD_REPOS_SUCCESS,
	LOAD_ADD_DEVICE,
	LOAD_SUCCESS,
	LOAD_DATA_ADD_DEVICE_SUCESS
} from './constants';

export const fetchPaymentDetailsData = (data) => {
  // console.log(data);
   return {
     type: PAYMENTCALC_DATA,
     payload: data
   };
}

export const resposonseLoaded = () => {
  return {
    type: LOAD_REPOS_SUCCESS
  };
}

export const addADevice = (response) => {
  return {
    type: LOAD_ADD_DEVICE,
    payload: response
  };
}

export const loadedSuccessful = (res) => {
  return {
    type: LOAD_SUCCESS,
    res
  };
}

export const addADeviceSuccess = (result) => {
  return {
    type: LOAD_DATA_ADD_DEVICE_SUCESS,
    result
  };
}
