import { createSlice } from '@reduxjs/toolkit';
import { CalculatiNumbersons } from '../types';

const initialState = {
  calcData: {} as CalculatiNumbersons,
  clearAllData: 0,
};

const calcSlice = createSlice({
  name: 'calcSlice',
  initialState,
  reducers: {
    updateBilAndTip: (state, action) => {
      state.calcData = action.payload
    },
    clearAllFields: (state) => {
      state.calcData = {
        bill: 0,
        tip: 0,
        peopleCount: 0,
      }
    },
    resetAllFields: (state ) => {
      state.clearAllData += 1
    },
  },
});

export const { updateBilAndTip, clearAllFields, resetAllFields } = calcSlice.actions
export default calcSlice.reducer;
