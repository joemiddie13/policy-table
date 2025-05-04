import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { upvoteComment, downvoteComment, selectPolicyById } from '../../features/policies/policiesSlice';
import CommentForm from './CommentForm';
import './Comment.css';

function Comment({ comment, policyId, level = 0 }) {
  const dispatch = useDispatch();
  const [showReplyForm, setShowReplyForm] = useState(false);
  
  // Get the policy to access all comments
  const policy = useSelector(state => selectPolicyById(state, policyId));
  
  // Find child comments
  const childComments = policy.comments.filter(c => c.parentId === comment.id);
  
  // Format the timestamp
  const formattedDate = new Date(comment.timestamp).toLocaleString();
  
  // Get position-specific styling
  const getPositionClass = (type) => {
    switch (type) {
      case 'pro':
        return 'comment-pro';
      case 'con':
        return 'comment-con';
      case 'neutral':
        return 'comment-neutral';
      default:
        return '';
    }
  };
  
  const handleUpvote = () => {
    dispatch(upvoteComment({ policyId, commentId: comment.id }));
  };
  
  const handleDownvote = () => {
    dispatch(downvoteComment({ policyId, commentId: comment.id }));
  };
  
  const handleReplyClick = () => {
    setShowReplyForm(true);
  };
  
  const handleCancelReply = () => {
    setShowReplyForm(false);
  };
  
  return (
    <div className={`comment ${getPositionClass(comment.type)} level-${level}`}>
      <div className="comment-header">
        <div className="comment-author">
          <span className="author-name">{comment.author}</span>
          <span className="position-badge">{comment.type}</span>
        </div>
        <div className="comment-timestamp">
          {formattedDate}
        </div>
      </div>
      
      <div className="comment-text">
        {comment.text}
      </div>
      
      <div className="comment-footer">
        <div className="comment-votes">
          <button 
            className="vote-button upvote" 
            onClick={handleUpvote}
          >
            👍 {comment.upvotes}
          </button>
          <button 
            className="vote-button downvote" 
            onClick={handleDownvote}
          >
            👎 {comment.downvotes}
          </button>
        </div>
        <button 
          className="reply-button"
          onClick={handleReplyClick}
        >
          Reply
        </button>
      </div>
      
      {showReplyForm && (
        <CommentForm 
          policyId={policyId} 
          parentId={comment.id}
          onCancel={handleCancelReply}
        />
      )}
      
      {childComments.length > 0 && (
        <div className="comment-replies">
          {childComments.map(childComment => (
            <Comment 
              key={childComment.id}
              comment={childComment}
              policyId={policyId}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;