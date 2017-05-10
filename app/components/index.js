/* eslint-disable no-console */

import 'es6-promise/auto';
const components = {};

components.VZW_PaymentCalculatorHeader = () => {
  return new Promise(resolve =>
    require.ensure([], (require) => {
      const VZW_PaymentCalculatorHeader = require('./VZW_PaymentCalculatorHeader').default;
      resolve(VZW_PaymentCalculatorHeader);
    }, 'VZW_PaymentCalculatorHeader')
  ).catch((err) => {
    console.log(err);
  });
};

components.GetInitialResource = () => {
  return new Promise(resolve =>
    require.ensure([], (require) => {
      const GetInitialResource = require('./../containers/GetInitialResource').default;
      resolve(GetInitialResource);
    }, 'GetInitialResource')
  ).catch((err) => {
    console.log(err);
  });
};

components.VZW_PaymentCalculatorAddDeviceBase = () => {
  return new Promise(resolve =>
    require.ensure([], (require) => {
      const VZW_PaymentCalculatorAddDeviceBase = require('./VZW_PaymentCalculatorAddDeviceBase').default;
      resolve(VZW_PaymentCalculatorAddDeviceBase);
    }, 'VZW_PaymentCalculatorAddDeviceBase')
  ).catch((err) => {
    console.log(err);
  });
};

components.VZW_PaymentCalculatorCart = () => {
  return new Promise(resolve =>
    require.ensure([], (require) => {
      const VZW_PaymentCalculatorCart = require('./VZW_PaymentCalculatorCart').default;
      resolve(VZW_PaymentCalculatorCart);
    }, 'VZW_PaymentCalculatorCart')
  ).catch((err) => {
    console.log(err);
  });
};

components.VZW_PaymentCalculatorPlan = () => {
  return new Promise(resolve =>
    require.ensure([], (require) => {
      const VZW_PaymentCalculatorPlan = require('./../containers/VZW_PaymentCalculatorPlan').default;
      resolve(VZW_PaymentCalculatorPlan);
    }, 'VZW_PaymentCalculatorPlan')
  ).catch((err) => {
    console.log(err);
  });
};

components.empty = () => {
  return new Promise(resolve =>
    require.ensure([], (require) => {
      const empty = require('./empty').default;
      resolve(empty);
    }, 'empty')
  ).catch((err) => {
    console.log(err);
  });
};



export default components;
