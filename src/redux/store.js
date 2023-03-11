import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices/modeSlice';
import canvasReducer from './slices/canvasSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    canvas: canvasReducer,
  },
});
