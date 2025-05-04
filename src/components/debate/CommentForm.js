import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../features/policies/policiesSlice';

function CommentForm({ policyId }) {
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
        type
      }
    }));

    // Reset form
    setText('');
    setType('neutral');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <h3>Add Your Argument</h3>
      
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
        <label htmlFor="argument">Your Argument</label>
        <textarea
          id="argument"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your thoughts on this policy..."
          rows="4"
        />
        {error && <p className="error-text">{error}</p>}
      </div>

      <button type="submit" className="submit-button">
        Submit Argument
      </button>
    </form>
  );
}

export default CommentForm;