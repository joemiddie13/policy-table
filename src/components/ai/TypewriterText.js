import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TypewriterText({ text, delay = 20, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    setShowCursor(true);
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsComplete(true);
        if (onComplete) onComplete();
        
        // Hide cursor after a short delay when complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay, onComplete]);

  // Blinking cursor animation
  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear"
      }
    }
  };

  return (
    <div style={{ display: 'inline' }}>
      {displayedText}
      <AnimatePresence>
        {showCursor && (
          <motion.span
            variants={cursorVariants}
            animate="blinking"
            exit={{ opacity: 0 }}
            style={{ display: 'inline-block', marginLeft: '2px' }}
          >
            |
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TypewriterText;