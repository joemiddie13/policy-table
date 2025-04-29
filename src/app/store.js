import { configureStore } from '@reduxjs/toolkit';
import policiesReducer from '../features/policies/policiesSlice';

export const store = configureStore({
  reducer: {
    policies: policiesReducer,
    // Add more reducers here as your app grows
  },
});