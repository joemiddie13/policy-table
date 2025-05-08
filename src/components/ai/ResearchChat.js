import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectApiKey } from '../../features/ai/aiSlice';
import { aiService } from '../../services/aiService';
import './ResearchChat.css';

function ResearchChat({ policy }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const apiKey = useSelector(selectApiKey);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add welcome message when chat is first opened
    setMessages([
      {
        type: 'ai',
        text: `Hi! I'm your research assistant for "${policy.title}". I can help answer questions about this policy topic.\n\nSome things you can ask me about:\n- Historical context of this issue\n- Arguments for and against this approach\n- Similar policies in other contexts\n- Recent developments on this topic`,
        timestamp: new Date()
      }
    ]);
  }, [policy.title]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    console.log("Submit handler called with text:", inputText); // Debug log
    
    if (!inputText.trim()) return;
    
    const userMessage = {
      type: 'user',
      text: inputText.trim(),
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    setIsLoading(true);
    setError('');
    
    try {
      console.log("Calling AI service with policy:", policy.title); // Debug log
      
      const response = await aiService.generateResearchResponse(
        apiKey, 
        policy, 
        userMessage.text
      );
      
      console.log("Received response from AI service:", response.substring(0, 50) + "..."); // Debug log
      
      const aiMessage = {
        type: 'ai',
        text: response,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (err) {
      console.error('Research Assistant error:', err); // Debug log
      setError(err.message || 'Failed to generate response');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionClick = (question) => {
    setInputText(question);
    // Submit the form programmatically after setting the input text
    setTimeout(() => {
      handleSubmit();
    }, 100);
  };

  // Function to format message text with markdown-like syntax
  const formatMessageText = (text) => {
    // Split by new lines
    const lines = text.split('\n');
    
    return lines.map((line, index) => {
      // Bold for headings (lines with colon)
      if (line.match(/^[A-Za-z\s]+(:|-)/) && line.length < 50) {
        return <strong key={index}>{line}</strong>;
      }
      
      // Handle bullet points
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return <li key={index}>{line.substring(2)}</li>;
      }
      
      // Handle empty lines as paragraph breaks
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      // Regular text
      return <React.Fragment key={index}>{line}{index < lines.length - 1 && <br />}</React.Fragment>;
    });
  };

  const SuggestedQuestions = () => {
    const questions = [
      "What's the historical context for this policy?",
      "What are the main arguments for and against this approach?",
      "Are there similar policies in other countries?",
      "What research exists on the effectiveness of this policy?"
    ];

    return (
      <div className="suggested-questions">
        <p className="suggested-title">Suggested questions:</p>
        <div className="question-buttons">
          {questions.map((question, index) => (
            <button 
              key={index} 
              className="question-button"
              onClick={() => handleQuestionClick(question)}
              type="button"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="research-chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={`message ${message.type}-message`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="message-content">
              {message.type === 'ai' ? (
                <div className="ai-message-text">
                  {formatMessageText(message.text)}
                </div>
              ) : (
                <p>{message.text}</p>
              )}
            </div>
            <div className="message-timestamp">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </motion.div>
        ))}
        
        {isLoading && (
          <div className="message ai-message loading-message">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        
        {error && (
          <div className="error-message">
            <p>Error: {error}</p>
            <p>Please try again or rephrase your question.</p>
          </div>
        )}
        
        {messages.length === 1 && !isLoading && (
          <SuggestedQuestions />
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask a research question..."
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={!inputText.trim() || isLoading}
        >
          {isLoading ? 'Researching...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default ResearchChat;