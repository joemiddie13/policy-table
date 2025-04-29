import React from 'react';
import PolicyForm from '../components/policy/PolicyForm';

function SubmitPolicyPage() {
  return (
    <div className="submit-policy-page">
      <h1>Submit a Policy Proposal</h1>
      <p className="page-description">
        Share your policy ideas with the community. Be clear, concise, and 
        provide evidence to support your proposal when possible.
      </p>
      <PolicyForm />
    </div>
  );
}

export default SubmitPolicyPage;