import React from 'react';
import { useDispatch } from 'react-redux';
import { upvoteComment, downvoteComment } from '../../features/policies/policiesSlice';
import './Comment.css';

function Comment({ comment, policyId }) {
  const dispatch = useDispatch();
  
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
  
  return (
    <div className={`comment ${getPositionClass(comment.type)}`}>
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
        <button className="reply-button">
          Reply
        </button>
      </div>
    </div>
  );
}

export default Comment;