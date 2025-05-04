import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvidenceLink } from '../../features/policies/policiesSlice';
import './EvidenceLink.css';

function EvidenceLink({ policyId, commentId, existingLinks = [] }) {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }

    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }

    dispatch(addEvidenceLink({
      policyId,
      commentId,
      evidenceLink: {
        url: url.trim(),
        title: title.trim(),
        description: description.trim()
      }
    }));

    // Reset form
    setUrl('');
    setTitle('');
    setDescription('');
    setError('');
    setShowForm(false);
  };

  const handleCancel = () => {
    setUrl('');
    setTitle('');
    setDescription('');
    setError('');
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <div className="evidence-link-container">
        {existingLinks.length > 0 && (
          <div className="evidence-links-list">
            <h4>Supporting Evidence:</h4>
            {existingLinks.map(link => (
              <div key={link.id} className="evidence-link-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="evidence-link-title">
                  🔗 {link.title}
                </a>
                {link.description && (
                  <p className="evidence-link-description">{link.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
        <button 
          className="add-evidence-button"
          onClick={() => setShowForm(true)}
        >
          + Add Evidence
        </button>
      </div>
    );
  }

  return (
    <div className="evidence-link-form">
      <h4>Add Supporting Evidence</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor={`url-${commentId}`}>URL *</label>
          <input
            type="url"
            id={`url-${commentId}`}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/article"
          />
        </div>

        <div className="form-group">
          <label htmlFor={`title-${commentId}`}>Title *</label>
          <input
            type="text"
            id={`title-${commentId}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Brief title for the evidence"
          />
        </div>

        <div className="form-group">
          <label htmlFor={`description-${commentId}`}>Description (optional)</label>
          <textarea
            id={`description-${commentId}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of how this supports your argument"
            rows="2"
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Add Evidence
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EvidenceLink;