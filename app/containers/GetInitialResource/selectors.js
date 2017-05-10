import { createSelector } from 'reselect';

const selectPaymentCalcConfigDomain = () => (state) => state.get('GetInitialResource');

const selectPaymentCalcConfig = () => createSelector(
  selectPaymentCalcConfigDomain(),
  (substate) => substate.toJS()
);

export default selectPaymentCalcConfig;
export {
  selectPaymentCalcConfigDomain,
};
