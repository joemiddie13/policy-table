import { configureStore } from '@reduxjs/toolkit';
import policiesReducer from '../features/policies/policiesSlice';
import aiReducer from '../features/ai/aiSlice';

export const store = configureStore({
  reducer: {
    policies: policiesReducer,
    ai: aiReducer,
    // Add more reducers here as your app grows
  },
});