import React from 'react';

function PoliciesPage() {
  return (
    <div className="policies-page">
      <h1>Policy Proposals</h1>
      <div className="filters">
        <button>All Topics</button>
        <button>Healthcare</button>
        <button>Education</button>
        <button>Environment</button>
        <button>Economy</button>
      </div>
      <div className="policy-list">
        <p>No policies yet. Be the first to create one!</p>
      </div>
    </div>
  );
}

export default PoliciesPage;