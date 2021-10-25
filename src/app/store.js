import { configureStore } from '@reduxjs/toolkit';

import reducers from './slices/index';

export const store = configureStore({
  reducer: reducers
});

export default store;