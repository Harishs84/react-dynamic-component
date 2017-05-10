import { fromJS } from 'immutable';
import {
    PAYMENTCALC_DATA,
    LOAD_SUCCESS,
    LOAD_ADD_DEVICE,
    LOAD_DATA_ADD_DEVICE_SUCESS

} from './constants';

import newData from './../../data/addDevice.json';
import newProcessData from './../../data/paymentCalculator.json';

const initialState = fromJS({ 
    "clicked": {
        "single": {
            "display": true
        },
        "shared": {
            "display": false
        },
    },
    "activeTab" : "single",
    "loader": true,
    "device" : {
        "loader" : true
    }
})

export default function paymentCalculatorContainerReducer(state = initialState, action) {

   switch (action.type) {

        case PAYMENTCALC_DATA:
            return state.setIn(["clicked", "shared", "display"], false)
            .setIn(["clicked", action.payload, "display"], true)
            .setIn(["activeTab"], action.payload);

        case LOAD_SUCCESS:
            return state
            .set('loader', false)
            .setIn(['responseData'], action.res);      

        case LOAD_DATA_ADD_DEVICE_SUCESS:
            return state
            .setIn(['device','loader'], false)
            .setIn(['addDeviceResponseData'], newData);  
        default:
            return state;
    }
}
