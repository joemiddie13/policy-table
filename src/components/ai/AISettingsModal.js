import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiKey, clearApiKey, selectApiKey, selectIsAiConfigured } from '../../features/ai/aiSlice';
import './AISettingsModal.css';

function AISettingsModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const currentApiKey = useSelector(selectApiKey);
  const isConfigured = useSelector(selectIsAiConfigured);
  
  const [apiKey, setApiKeyInput] = useState(currentApiKey || '');
  const [showApiKey, setShowApiKey] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!apiKey.trim()) {
      setError('Please enter an API key');
      return;
    }

    // Basic validation for Anthropic API key format
    if (!apiKey.startsWith('sk-ant-')) {
      setError('Invalid API key format. Anthropic keys should start with "sk-ant-"');
      return;
    }

    dispatch(setApiKey(apiKey));
    setSuccess('API key saved successfully!');
    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to remove your API key?')) {
      dispatch(clearApiKey());
      setApiKeyInput('');
      setSuccess('API key removed successfully!');
      setTimeout(() => {
        setSuccess('');
      }, 3000);
    }
  };

  const maskApiKey = (key) => {
    if (!key) return '';
    return `${key.substring(0, 10)}...${key.substring(key.length - 4)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>AI Settings</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <p className="instructions">
            To enable AI features, please enter your Anthropic API key. 
            You can get one from <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">console.anthropic.com</a>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="apiKey">API Key</label>
              <div className="api-key-input-wrapper">
                <input
                  type={showApiKey ? "text" : "password"}
                  id="apiKey"
                  value={apiKey}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="sk-ant-..."
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <div className="form-actions">
              <button type="submit" className="save-button">
                Save API Key
              </button>
              {isConfigured && (
                <button type="button" className="clear-button" onClick={handleClear}>
                  Remove API Key
                </button>
              )}
            </div>
          </form>

          {isConfigured && (
            <div className="current-key-info">
              <p>Current API Key: {maskApiKey(currentApiKey)}</p>
              <p className="ai-status">✓ AI Features Enabled</p>
            </div>
          )}

          <div className="security-note">
            <h3>Security Note</h3>
            <p>Your API key is stored locally in your browser and never sent to our servers. Please keep your API key secure and do not share it with others.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AISettingsModal;