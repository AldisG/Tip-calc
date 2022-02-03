import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import calcSlice from '../slices/calcSlice';

const store = configureStore({
  reducer: {
    calcSlice: calcSlice
  },
});
setupListeners(store.dispatch)

export default store;
export type RootState = ReturnType<typeof store.getState>
export type ApiDispatch = typeof store.dispatch
