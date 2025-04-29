import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPolicy } from '../../features/policies/policiesSlice';
import './PolicyForm.css';

function PolicyForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // State for form fields using the controlled component pattern
  const [formData, setFormData] = useState({
    title: '',
    category: 'healthcare',
    problemStatement: '',
    proposedSolution: '',
    expectedOutcomes: '',
    potentialChallenges: ''
  });

  // Error state for form validation
  const [errors, setErrors] = useState({});
  
  // Success message state
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.problemStatement.trim()) {
      newErrors.problemStatement = 'Problem statement is required';
    }
    
    if (!formData.proposedSolution.trim()) {
      newErrors.proposedSolution = 'Proposed solution is required';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Dispatch the action to add the policy to Redux store
    dispatch(addPolicy({
      ...formData,
      author: 'current_user' // Later replace with actual authentication
    }));
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      title: '',
      category: 'healthcare',
      problemStatement: '',
      proposedSolution: '',
      expectedOutcomes: '',
      potentialChallenges: ''
    });
    
    // Hide success message after 3 seconds and navigate to policies page
    setTimeout(() => {
      setSubmitted(false);
      navigate('/policies');
    }, 3000);
  };

  return (
    <div className="policy-form-container">
      <h2>Submit a New Policy Proposal</h2>
      
      {submitted && (
        <div className="success-message">
          Your policy proposal has been submitted successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="environment">Environment</option>
            <option value="economy">Economy</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="problemStatement">Problem Statement *</label>
          <textarea
            id="problemStatement"
            name="problemStatement"
            value={formData.problemStatement}
            onChange={handleChange}
            className={errors.problemStatement ? 'error' : ''}
            rows="4"
          ></textarea>
          {errors.problemStatement && (
            <p className="error-text">{errors.problemStatement}</p>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="proposedSolution">Proposed Solution *</label>
          <textarea
            id="proposedSolution"
            name="proposedSolution"
            value={formData.proposedSolution}
            onChange={handleChange}
            className={errors.proposedSolution ? 'error' : ''}
            rows="4"
          ></textarea>
          {errors.proposedSolution && (
            <p className="error-text">{errors.proposedSolution}</p>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="expectedOutcomes">Expected Outcomes</label>
          <textarea
            id="expectedOutcomes"
            name="expectedOutcomes"
            value={formData.expectedOutcomes}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="potentialChallenges">Potential Challenges</label>
          <textarea
            id="potentialChallenges"
            name="potentialChallenges"
            value={formData.potentialChallenges}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        
        <div className="form-footer">
          <button type="submit" className="submit-button">Submit Proposal</button>
        </div>
      </form>
    </div>
  );
}

export default PolicyForm;