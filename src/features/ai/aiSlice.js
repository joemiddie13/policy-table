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
    },
    researchAssistant: {
      isExpanded: false
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
    },
    
    toggleResearchAssistantExpansion: (state) => {
      state.researchAssistant.isExpanded = !state.researchAssistant.isExpanded;
    },
    
    setResearchAssistantExpanded: (state, action) => {
      state.researchAssistant.isExpanded = action.payload;
    }
  }
});

export const { 
  setApiKey, 
  updateSettings, 
  clearApiKey,
  toggleResearchAssistantExpansion,
  setResearchAssistantExpanded
} = aiSlice.actions;

// Selectors
export const selectApiKey = state => state.ai.apiKey;
export const selectIsAiConfigured = state => state.ai.isConfigured;
export const selectAiSettings = state => state.ai.settings;
export const selectResearchAssistantState = state => state.ai.researchAssistant;

export default aiSlice.reducer;