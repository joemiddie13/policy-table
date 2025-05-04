import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../features/policies/policiesSlice';
import './CommentForm.css';

function CommentForm({ policyId, parentId = null, onCancel = null }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [type, setType] = useState('neutral');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!text.trim()) {
      setError('Please enter your argument');
      return;
    }

    dispatch(addComment({
      policyId,
      comment: {
        text: text.trim(),
        type,
        parentId
      }
    }));

    // Reset form
    setText('');
    setType('neutral');
    setError('');
    
    // Call onCancel if this is a reply form
    if (onCancel) {
      onCancel();
    }
  };

  const isReply = parentId !== null;

  return (
    <form onSubmit={handleSubmit} className={`comment-form ${isReply ? 'reply-form' : ''}`}>
      <h3>{isReply ? 'Reply to Comment' : 'Add Your Argument'}</h3>
      
      <div className="form-group">
        <label>Position</label>
        <div className="position-buttons">
          <button
            type="button"
            className={`position-btn ${type === 'pro' ? 'active' : ''}`}
            onClick={() => setType('pro')}
          >
            👍 Pro
          </button>
          <button
            type="button"
            className={`position-btn ${type === 'neutral' ? 'active' : ''}`}
            onClick={() => setType('neutral')}
          >
            🤔 Neutral
          </button>
          <button
            type="button"
            className={`position-btn ${type === 'con' ? 'active' : ''}`}
            onClick={() => setType('con')}
          >
            👎 Con
          </button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="argument">Your {isReply ? 'Reply' : 'Argument'}</label>
        <textarea
          id="argument"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={isReply ? 'Share your reply...' : 'Share your thoughts on this policy...'}
          rows={isReply ? '3' : '4'}
        />
        {error && <p className="error-text">{error}</p>}
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Submit {isReply ? 'Reply' : 'Argument'}
        </button>
        {isReply && onCancel && (
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default CommentForm;