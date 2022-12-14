import { Action, createReducer, on } from '@ngrx/store';
import {
  getCarOptionsAction,
  setCarOptionsAction,
} from './calculationLoanPage.action';

import { CalculationLoanPageStateInterface } from '../models/interfaces/calculationLoanPageState.interface';

const initialState: CalculationLoanPageStateInterface = {
  carOptions: null,
};

const calculationLoanPageReducer = createReducer(
  initialState,
  on(
    getCarOptionsAction,
    (state): CalculationLoanPageStateInterface => ({
      ...state,
    })
  ),
  on(
    setCarOptionsAction,
    (state, action): CalculationLoanPageStateInterface => ({
      ...state,
      carOptions: action.carOptions,
    })
  )
);

export function reducers(
  state: CalculationLoanPageStateInterface,
  action: Action
) {
  return calculationLoanPageReducer(state, action);
}
