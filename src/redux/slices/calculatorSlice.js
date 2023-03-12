import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screenValue: '0',
  wasItOperator: false,
  currentOperand: null,
  prevOperand: null,
  operator: null,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action) => {
      if (state.currentOperand === '0' && action.payload === '0') {
        return;
      }
      if (action.payload === ',' && state.currentOperand.includes(',')) {
        return;
      }
      if (state.currentOperand === '0') {
        state.currentOperand = action.payload;
      } else {
        if (state.wasItOperator) {
          state.currentOperand = action.payload;
          state.wasItOperator = false;
        } else {
          state.currentOperand = `${state.currentOperand}${action.payload}`;
        }
      }
    },

    addOperator: (state, action) => {
      // if (state.currentOperand === '0' && state.prevOperand === '0') {
      //   return;
      // }
      // state.wasItOperator = true;
      // state.operator = action.payload;
      // if (state.prevOperand === '0') {
      //   state.prevOperand = state.currentOperand;
      // } else {
      //   console.log('CALCULATING...', state.prevOperand + state.operator + state.currentOperand);
      //   state.prevOperand = eval(state.prevOperand + state.operator + state.currentOperand);
      // }
    },

    resetCalculator: (state) => {
      state.currentOperand = '0';
    },
  },
});

export const { addDigit, resetCalculator, addOperator } = calculatorSlice.actions;

export default calculatorSlice.reducer;
