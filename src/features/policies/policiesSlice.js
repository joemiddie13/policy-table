import { createSlice } from '@reduxjs/toolkit';

// Sample initial policies for development
const initialPolicies = [
  {
    id: '1',
    title: 'Universal Healthcare Coverage',
    category: 'healthcare',
    problemStatement: 'Millions of citizens lack adequate healthcare coverage, leading to delayed care and preventable suffering.',
    proposedSolution: 'Implement a universal healthcare system covering all citizens with basic medical services.',
    expectedOutcomes: 'Reduced healthcare costs, improved public health, and elimination of medical bankruptcies.',
    potentialChallenges: 'Significant upfront costs and resistance from established healthcare industry.',
    upvotes: 42,
    downvotes: 12,
    dateSubmitted: '2025-04-15T10:30:00.000Z',
    author: 'healthpolicy123',
    comments: []
  },
  {
    id: '2',
    title: 'Green Energy Transition Fund',
    category: 'environment',
    problemStatement: 'Climate change threatens long-term sustainability while fossil fuel dependency continues.',
    proposedSolution: 'Create a federal fund to subsidize transition to renewable energy sources across all sectors.',
    expectedOutcomes: 'Reduced carbon emissions, new green jobs, and increased energy independence.',
    potentialChallenges: 'Transition costs and opposition from fossil fuel industry stakeholders.',
    upvotes: 38,
    downvotes: 8,
    dateSubmitted: '2025-04-10T14:15:00.000Z',
    author: 'greenplanet',
    comments: []
  }
];

const policiesSlice = createSlice({
  name: 'policies',
  initialState: {
    items: initialPolicies,
    isLoading: false,
    error: null,
    currentCategory: 'all'
  },
  reducers: {
    // Add a new policy
    addPolicy: (state, action) => {
      const newPolicy = {
        id: Date.now().toString(),
        ...action.payload,
        upvotes: 0,
        downvotes: 0,
        dateSubmitted: new Date().toISOString(),
        comments: []
      };
      state.items.push(newPolicy);
    },
    
    // Upvote a policy
    upvotePolicy: (state, action) => {
      const policy = state.items.find(p => p.id === action.payload);
      if (policy) {
        policy.upvotes += 1;
      }
    },
    
    // Downvote a policy
    downvotePolicy: (state, action) => {
      const policy = state.items.find(p => p.id === action.payload);
      if (policy) {
        policy.downvotes += 1;
      }
    },
    
    // Filter policies by category
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    
    // Add a comment/argument to a policy
    addComment: (state, action) => {
      const { policyId, comment } = action.payload;
      const policy = state.items.find(p => p.id === policyId);
      if (policy) {
        policy.comments.push({
          id: Date.now().toString(),
          text: comment.text,
          type: comment.type, // 'pro', 'con', or 'neutral'
          author: 'current_user', // Replace with actual user authentication
          timestamp: new Date().toISOString(),
          upvotes: 0,
          downvotes: 0,
          parentId: comment.parentId || null // For threading
        });
      }
    },
    
    // Upvote a comment
    upvoteComment: (state, action) => {
      const { policyId, commentId } = action.payload;
      const policy = state.items.find(p => p.id === policyId);
      if (policy) {
        const comment = policy.comments.find(c => c.id === commentId);
        if (comment) {
          comment.upvotes += 1;
        }
      }
    },
    
    // Downvote a comment
    downvoteComment: (state, action) => {
      const { policyId, commentId } = action.payload;
      const policy = state.items.find(p => p.id === policyId);
      if (policy) {
        const comment = policy.comments.find(c => c.id === commentId);
        if (comment) {
          comment.downvotes += 1;
        }
      }
    }
  }
});

// Export actions
export const { 
  addPolicy, 
  upvotePolicy, 
  downvotePolicy, 
  setCategory, 
  addComment,
  upvoteComment,
  downvoteComment
} = policiesSlice.actions;

// Selectors
export const selectAllPolicies = state => state.policies.items;

export const selectFilteredPolicies = state => {
  const { items, currentCategory } = state.policies;
  if (currentCategory === 'all') {
    return items;
  }
  return items.filter(policy => policy.category === currentCategory);
};

export const selectPolicyById = (state, policyId) => 
  state.policies.items.find(policy => policy.id === policyId);

export default policiesSlice.reducer;