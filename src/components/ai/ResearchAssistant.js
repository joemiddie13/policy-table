import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  selectApiKey, 
  selectIsAiConfigured, 
  selectResearchAssistantState,
  toggleResearchAssistantExpansion
} from '../../features/ai/aiSlice';
import ResearchChat from './ResearchChat';
import './ResearchAssistant.css';

function ResearchAssistant({ policy }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const dispatch = useDispatch();
  const apiKey = useSelector(selectApiKey);
  const isAIConfigured = useSelector(selectIsAiConfigured);
  const { isExpanded } = useSelector(selectResearchAssistantState);

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
      dispatch(toggleResearchAssistantExpansion());
    }
  };

  // Animation variants
  const sidebarVariants = {
    expanded: {
      width: windowWidth <= 768 ? '100%' : '400px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    collapsed: {
      width: '50px',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const contentVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.2
      }
    },
    collapsed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const verticalTextVariants = {
    expanded: {
      opacity: 0,
      transition: {
        duration: 0.1
      }
    },
    collapsed: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.2
      }
    }
  };

  if (!isAIConfigured) {
    return (
      <div className="research-sidebar research-disabled">
        <div className="research-sidebar-collapsed">
          <div className="vertical-text disabled">Research Assistant</div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="research-sidebar"
      variants={sidebarVariants}
      animate={isExpanded ? 'expanded' : 'collapsed'}
      initial="collapsed"
    >
      {/* Collapsed state with vertical text */}
      <motion.div 
        className="research-sidebar-collapsed"
        variants={verticalTextVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        onClick={!isExpanded ? toggleExpanded : undefined}
      >
        <div className="magnifying-glass">🔍</div>
        <div className="vertical-text">Research Assistant</div>
      </motion.div>

      {/* Expanded state with chat interface */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="research-sidebar-expanded"
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <div className="research-header">
              <h3>Research Assistant</h3>
              <button 
                className="collapse-button" 
                onClick={toggleExpanded}
                title="Collapse"
              >
                &raquo;&raquo;&raquo;
              </button>
            </div>
            <div className="research-content">
              <ResearchChat policy={policy} sidePanel={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ResearchAssistant;