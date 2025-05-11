import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPolicyById, upvotePolicy, downvotePolicy } from '../features/policies/policiesSlice';
import CommentForm from '../components/debate/CommentForm';
import Comment from '../components/debate/Comment';
import AISummary from '../components/ai/AISummary';
import ResearchAssistant from '../components/ai/ResearchAssistant';
import './PolicyDetailPage.css';

function PolicyDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const policy = useSelector(state => selectPolicyById(state, id));

  if (!policy) {
    return <div>Policy not found</div>;
  }

  return (
    <div className="policy-detail-page">
      <div className="policy-header">
        <h1>{policy.title}</h1>
        <p className="category">{policy.category}</p>
        <p className="author">Submitted by: {policy.author} on {new Date(policy.dateSubmitted).toLocaleDateString()}</p>
      </div>

      <div className="ai-features">
        <AISummary policy={policy} />
      </div>

      <div className="policy-content">
        <section>
          <h2>Problem Statement</h2>
          <p>{policy.problemStatement}</p>
        </section>

        <section>
          <h2>Proposed Solution</h2>
          <p>{policy.proposedSolution}</p>
        </section>

        <section>
          <h2>Expected Outcomes</h2>
          <p>{policy.expectedOutcomes}</p>
        </section>

        <section>
          <h2>Potential Challenges</h2>
          <p>{policy.potentialChallenges}</p>
        </section>
      </div>

      <div className="policy-votes">
        <button onClick={() => dispatch(upvotePolicy(policy.id))}>
          👍 Upvote ({policy.upvotes})
        </button>
        <button onClick={() => dispatch(downvotePolicy(policy.id))}>
          👎 Downvote ({policy.downvotes})
        </button>
      </div>

      <div className="policy-debate">
        <h2>Discussion</h2>
        <CommentForm policyId={policy.id} />
        
        {policy.comments.length === 0 ? (
          <p className="no-comments">No comments yet. Be the first to share your thoughts!</p>
        ) : (
          <div className="comments-list">
            {policy.comments
              .filter(comment => comment.parentId === null)
              .map(comment => (
                <Comment 
                  key={comment.id} 
                  comment={comment} 
                  policyId={policy.id} 
                />
              ))}
          </div>
        )}
      </div>
      
      {/* Research Assistant is now a vertical sidebar */}
      <ResearchAssistant policy={policy} />
    </div>
  );
}

export default PolicyDetailPage;