import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { selectApiKey, selectIsAiConfigured } from '../../features/ai/aiSlice';
import ResearchChat from './ResearchChat';
import './ResearchAssistant.css';

function ResearchAssistant({ policy }) {
  const [showChat, setShowChat] = useState(false);
  
  const apiKey = useSelector(selectApiKey);
  const isAIConfigured = useSelector(selectIsAiConfigured);

  const handleOpenChat = () => {
    if (isAIConfigured) {
      setShowChat(true);
    }
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  };

  if (!isAIConfigured) {
    return (
      <div className="research-assistant-container">
        <div className="ai-feature-disabled">
          <p>🤖 AI features are not configured. Please set up your API key in the settings.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="research-assistant-container">
      {!showChat ? (
        <motion.button
          className="research-assistant-button"
          onClick={handleOpenChat}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          🔍 Research Assistant
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            className="research-chat-modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="research-chat-header">
              <h3>Research Assistant</h3>
              <button
                className="close-button"
                onClick={handleCloseChat}
              >
                ×
              </button>
            </div>
            <ResearchChat policy={policy} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default ResearchAssistant;