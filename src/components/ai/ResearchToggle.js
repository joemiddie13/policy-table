import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { selectResearchAssistantState, toggleResearchAssistantVisibility } from '../../features/ai/aiSlice';
import './ResearchToggle.css';

function ResearchToggle() {
  const dispatch = useDispatch();
  const { isVisible } = useSelector(selectResearchAssistantState);
  
  const handleToggle = () => {
    dispatch(toggleResearchAssistantVisibility());
  };
  
  return (
    <motion.button 
      className="research-toggle-button"
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="toggle-icon">🔍</span>
      {isVisible ? 'Hide Research Assistant' : 'Show Research Assistant'}
    </motion.button>
  );
}

export default ResearchToggle;