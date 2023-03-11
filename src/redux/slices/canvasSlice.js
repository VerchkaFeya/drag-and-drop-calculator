import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [],
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addElementToCanvas: (state, action) => {
      if (action.payload === 'screen') {
        state.elements.unshift(action.payload);
      } else {
        state.elements.push(action.payload);
      }
    },
    removeElementFromCanvas: (state, action) => {
      const index = state.elements.indexOf(action.payload);

      if (index !== -1) {
        state.elements.splice(index, 1);
      }
    },
  },
});

export const { addElementToCanvas, removeElementFromCanvas } = canvasSlice.actions;

export default canvasSlice.reducer;
