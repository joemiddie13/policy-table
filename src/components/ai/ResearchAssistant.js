import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { selectApiKey, selectIsAiConfigured } from '../../features/ai/aiSlice';
import ResearchChat from './ResearchChat';
import './ResearchAssistant.css';

function ResearchAssistant({ policy }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const apiKey = useSelector(selectApiKey);
  const isAIConfigured = useSelector(selectIsAiConfigured);

  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpanded = () => {
    if (isAIConfigured) {
      setIsExpanded(!isExpanded);
    }
  };

  // Calculate panel width based on screen size
  const getPanelWidth = () => {
    if (windowWidth <= 640) return '100%'; // Full width on mobile
    if (windowWidth <= 1024) return '400px'; // Medium width on tablets
    return '450px'; // Larger width on desktops
  };

  // Animation variants
  const tabVariants = {
    closed: {
      right: 0,
      rotate: 0
    },
    open: {
      right: 0,
      rotate: 180
    }
  };

  const panelVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    }
  };

  if (!isAIConfigured) {
    return (
      <div className="research-tab-container">
        <div className="research-tab disabled" title="AI features not configured">
          <span>🔍</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Full-width overlay for mobile only */}
      {isExpanded && windowWidth <= 640 && (
        <div 
          className="research-overlay"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Tab button */}
      <div className="research-tab-container">
        <motion.button
          className={`research-tab ${isExpanded ? 'active' : ''}`}
          onClick={toggleExpanded}
          variants={tabVariants}
          animate={isExpanded ? 'open' : 'closed'}
          aria-label={isExpanded ? "Close Research Assistant" : "Open Research Assistant"}
          title="Research Assistant"
        >
          {isExpanded ? '✕' : '🔍'}
          <span className="tab-label">Research</span>
        </motion.button>
      </div>

      {/* Slide-out panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="research-panel"
            initial="closed"
            animate="open"
            exit="closed"
            variants={panelVariants}
            style={{ width: getPanelWidth() }}
          >
            <div className="research-panel-header">
              <h3>Research Assistant</h3>
            </div>
            <ResearchChat policy={policy} sidePanel={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ResearchAssistant;