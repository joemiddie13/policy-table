import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredPolicies, setCategory, upvotePolicy, downvotePolicy } from '../features/policies/policiesSlice';
import './PoliciesPage.css';

function PoliciesPage() {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('all');
  const policies = useSelector(selectFilteredPolicies);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    dispatch(setCategory(category));
  };

  return (
    <div className="policies-page">
      <h1>Policy Proposals</h1>
      
      <div className="filters">
        <button 
          className={activeCategory === 'all' ? 'active' : ''} 
          onClick={() => handleCategoryChange('all')}
        >
          All Topics
        </button>
        <button 
          className={activeCategory === 'healthcare' ? 'active' : ''} 
          onClick={() => handleCategoryChange('healthcare')}
        >
          Healthcare
        </button>
        <button 
          className={activeCategory === 'education' ? 'active' : ''} 
          onClick={() => handleCategoryChange('education')}
        >
          Education
        </button>
        <button 
          className={activeCategory === 'environment' ? 'active' : ''} 
          onClick={() => handleCategoryChange('environment')}
        >
          Environment
        </button>
        <button 
          className={activeCategory === 'economy' ? 'active' : ''} 
          onClick={() => handleCategoryChange('economy')}
        >
          Economy
        </button>
      </div>
      
      <div className="policy-list">
        {policies.length === 0 ? (
          <p>No policies yet. Be the first to create one!</p>
        ) : (
          policies.map(policy => (
            <div key={policy.id} className="policy-card">
              <h2>{policy.title}</h2>
              <p className="category">{policy.category}</p>
              <p>{policy.problemStatement}</p>
              <div className="votes">
                <button onClick={() => dispatch(upvotePolicy(policy.id))}>
                  👍 {policy.upvotes}
                </button>
                <button onClick={() => dispatch(downvotePolicy(policy.id))}>
                  👎 {policy.downvotes}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PoliciesPage;