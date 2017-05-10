import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import axios from 'axios';
import { loadedSuccessful, addADeviceSuccess } from './actions'
import { LOAD_REPOS_SUCCESS, LOAD_ADD_DEVICE } from './constants';

export function* watchChanges() {  
  const actions = yield[takeLatest(LOAD_REPOS_SUCCESS, renderDataInfo), takeLatest(LOAD_ADD_DEVICE, renderAddDeviceDataInfo)] ;
  // const actions = yield* takeLatest(LOAD_REPOS_SUCCESS, renderDataInfo);
}

const refUrl = `https://www.verizonwireless.com/UFDRender/StartFlow`;

function fetchDetails(){
  let str = window.location.pathname;
  const path = str.replace(/^\/|\/$/g, "");

  const url = `${refUrl}?&&CurrentStep=-1&Flow=Wireless%5CAOL+Wizards%5C${path}.xml`;
  return axios.get(url);
}

function* renderDataInfo() {
  try {    
    const response = yield call(fetchDetails)  
    yield put(loadedSuccessful(response.data));
  } catch(e) {
    console.error(e);
  }
}

function fetchAddDetails(result){
  const url = `https://www.verizonwireless.com/UFDRender/public/StartFlow?CurrentStep=8e23af7c-23b6-4ee2-b315-5a61f1035dc5&Path=2&Flow=Wireless%5CAOL+Wizards%5Cmonthly-payment-calculator.xml&Platform=Web&STACK=d9e145c6-487b-4cee-8ee5-5ff58f1453ec&SubFlow=Wireless%5CAOL+Wizards%5Cmonthly-payment-calculator.xml&TID=d2f606c8-5170-466d-bc5b-70317ef10b63&Level=1`;

  return axios.get(url);
}

function* renderAddDeviceDataInfo(action) {
  try {    
    const response = yield call(fetchAddDetails, action.payload)
    yield put(addADeviceSuccess(response.data));
  } catch(e) {
    console.error(e);
  }
}

// All sagas to be loaded
export default [
  watchChanges,
];
