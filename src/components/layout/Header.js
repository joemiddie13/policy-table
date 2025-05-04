import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAiConfigured } from '../../features/ai/aiSlice';
import AISettingsModal from '../ai/AISettingsModal';

function Header() {
  const [showAISettings, setShowAISettings] = useState(false);
  const isAIConfigured = useSelector(selectIsAiConfigured);

  return (
    <header className="header">
      <div className="logo">
        <h1>Policy Table</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/policies">Policies</Link></li>
          <li><Link to="/submit-policy">Submit Policy</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <button 
              className={`ai-settings-button ${isAIConfigured ? 'configured' : ''}`}
              onClick={() => setShowAISettings(true)}
            >
              {isAIConfigured ? '🤖 AI Settings' : '⚙️ Configure AI'}
            </button>
          </li>
        </ul>
      </nav>
      
      <AISettingsModal 
        isOpen={showAISettings} 
        onClose={() => setShowAISettings(false)} 
      />
    </header>
  );
}

export default Header;