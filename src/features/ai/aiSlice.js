import { createSlice } from '@reduxjs/toolkit';

const aiSlice = createSlice({
  name: 'ai',
  initialState: {
    apiKey: localStorage.getItem('anthropic_api_key') || null,
    isConfigured: !!localStorage.getItem('anthropic_api_key'),
    settings: {
      autoSummarize: false,
      civilityCheck: true,
      suggestRelated: true
    }
  },
  reducers: {
    setApiKey: (state, action) => {
      state.apiKey = action.payload;
      state.isConfigured = !!action.payload;
      
      // Save to localStorage
      if (action.payload) {
        localStorage.setItem('anthropic_api_key', action.payload);
      } else {
        localStorage.removeItem('anthropic_api_key');
      }
    },
    
    updateSettings: (state, action) => {
      state.settings = {
        ...state.settings,
        ...action.payload
      };
    },
    
    clearApiKey: (state) => {
      state.apiKey = null;
      state.isConfigured = false;
      localStorage.removeItem('anthropic_api_key');
    }
  }
});

export const { setApiKey, updateSettings, clearApiKey } = aiSlice.actions;

// Selectors
export const selectApiKey = state => state.ai.apiKey;
export const selectIsAiConfigured = state => state.ai.isConfigured;
export const selectAiSettings = state => state.ai.settings;

export default aiSlice.reducer;