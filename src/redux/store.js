import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices/modeSlice';
import canvasReducer from './slices/canvasSlice';
import calculatorReducer from './slices/calculatorSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    canvas: canvasReducer,
    calculator: calculatorReducer,
  },
});
