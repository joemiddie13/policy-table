import React from 'react';
import { motion } from 'framer-motion';

function AILoadingAnimation() {
  // Robot head animation
  const robotVariants = {
    thinking: {
      rotate: [-5, 5, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Brain pulse animation
  const brainVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Dots loading animation
  const dotVariants = {
    bounce: {
      y: [-5, 5],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="ai-loading-container flex flex-col items-center justify-center p-6">
      {/* Robot SVG */}
      <motion.div
        variants={robotVariants}
        animate="thinking"
        className="robot-container mb-4"
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Robot head */}
          <rect x="4" y="8" width="16" height="12" rx="2" stroke="#228be6" strokeWidth="2"/>
          
          {/* Robot eyes */}
          <circle cx="9" cy="14" r="1.5" fill="#228be6"/>
          <circle cx="15" cy="14" r="1.5" fill="#228be6"/>
          
          {/* Robot antenna */}
          <line x1="12" y1="8" x2="12" y2="4" stroke="#228be6" strokeWidth="2"/>
          <circle cx="12" cy="3" r="1.5" fill="#228be6"/>
          
          {/* Brain/thinking indicator */}
          <motion.path
            variants={brainVariants}
            animate="pulse"
            d="M8 17h8"
            stroke="#228be6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Loading text with animated dots */}
      <div className="flex items-center">
        <span className="text-gray-600 font-medium mr-1">AI is thinking</span>
        <div className="flex">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              variants={dotVariants}
              animate="bounce"
              transition={{ delay: index * 0.2 }}
              className="text-gray-600 font-bold"
            >
              .
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AILoadingAnimation;