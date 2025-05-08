// AI Service for interacting with Anthropic API through proxy server
// This service handles all AI-related operations for the PolicyForum

class AIService {
  constructor() {
    // Use the proxy server instead of calling Anthropic directly
    this.baseURL = 'http://localhost:3001/api/anthropic';
    this.model = 'claude-3-sonnet-20240229'; // Using Claude 3 Sonnet
  }

  // Base method for making API calls to Anthropic through our proxy
  async callAnthropic(apiKey, messages, maxTokens = 1000) {
    if (!apiKey) {
      throw new Error('API key is required');
    }

    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey, // Send API key as header, not in body
        },
        body: JSON.stringify({
          model: this.model,
          max_tokens: maxTokens,
          messages: messages
        })
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('API Error Response:', error);
        throw new Error(error.error?.message || `API call failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.content[0].text;
    } catch (error) {
      console.error('API Error:', error);
      
      // Provide more user-friendly error messages
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        throw new Error('Could not connect to the server. Please make sure the proxy server is running on port 3001.');
      }
      
      throw error;
    }
  }

  // Generate a summary of a policy proposal
  async generatePolicySummary(apiKey, policy) {
    const prompt = `Please provide a concise summary of the following policy proposal in 2-3 sentences:

Title: ${policy.title}
Category: ${policy.category}
Problem Statement: ${policy.problemStatement}
Proposed Solution: ${policy.proposedSolution}
Expected Outcomes: ${policy.expectedOutcomes}
Potential Challenges: ${policy.potentialChallenges}

Summary:`;

    const messages = [
      { role: 'user', content: prompt }
    ];

    return this.callAnthropic(apiKey, messages, 500);
  }

  // Analyze sentiment of a comment
  async analyzeSentiment(apiKey, text) {
    const prompt = `Analyze the sentiment and tone of the following comment. Provide a brief assessment including:
1. Overall sentiment (positive, negative, neutral)
2. Emotional tone
3. Level of constructiveness
4. Any concerning language

Comment: "${text}"

Analysis:`;

    const messages = [
      { role: 'user', content: prompt }
    ];

    return this.callAnthropic(apiKey, messages, 300);
  }

  // Check civility of content before submission
  async checkCivility(apiKey, text) {
    const prompt = `Evaluate the following text for civility and appropriateness in a policy discussion forum. 
Provide:
1. A civility score (1-10, where 10 is most civil)
2. Any problematic language or tone
3. Suggestions for improvement if needed

Text: "${text}"

Evaluation:`;

    const messages = [
      { role: 'user', content: prompt }
    ];

    const response = await this.callAnthropic(apiKey, messages, 400);
    
    // Parse the response to extract the civility score
    const scoreMatch = response.match(/civility score[:\s]+(\d+)/i);
    const score = scoreMatch ? parseInt(scoreMatch[1]) : 5;
    
    return {
      score,
      analysis: response,
      isAcceptable: score >= 6
    };
  }

  // Find related policies based on content similarity
  async findRelatedPolicies(apiKey, currentPolicy, allPolicies) {
    const prompt = `Given the current policy and a list of other policies, identify the 3 most related policies based on topic, approach, or problem domain.

Current Policy:
Title: ${currentPolicy.title}
Category: ${currentPolicy.category}
Problem: ${currentPolicy.problemStatement}

Other Policies:
${allPolicies.map((p, i) => `${i + 1}. "${p.title}" (${p.category}) - ${p.problemStatement.substring(0, 100)}...`).join('\n')}

Please identify the 3 most related policies by their numbers and explain why they are related.`;

    const messages = [
      { role: 'user', content: prompt }
    ];

    return this.callAnthropic(apiKey, messages, 600);
  }

  // Generate constructive feedback for a policy
  async generateFeedback(apiKey, policy) {
    const prompt = `Provide constructive feedback on the following policy proposal. Include:
1. Strengths of the proposal
2. Potential weaknesses or gaps
3. Suggestions for improvement
4. Questions for consideration

Policy:
Title: ${policy.title}
Problem: ${policy.problemStatement}
Solution: ${policy.proposedSolution}
Expected Outcomes: ${policy.expectedOutcomes}

Feedback:`;

    const messages = [
      { role: 'user', content: prompt }
    ];

    return this.callAnthropic(apiKey, messages, 800);
  }
  
  // Research Assistant method
  async generateResearchResponse(apiKey, policy, question) {
    const contextPrompt = `You are a helpful research assistant for a policy discussion platform. Users are discussing this policy proposal:

Title: ${policy.title}
Category: ${policy.category}
Problem Statement: ${policy.problemStatement}
Proposed Solution: ${policy.proposedSolution}
Expected Outcomes: ${policy.expectedOutcomes}
Potential Challenges: ${policy.potentialChallenges}

The user is asking for information related to this policy. Please provide a helpful, informative, and balanced response. Include relevant facts, historical context, multiple perspectives, and cite sources when possible. Format your response in a readable way with sections and bullet points when appropriate.

User's question: "${question}"

Respond as a knowledgeable policy researcher would, providing context, nuance, and balanced information. Be concise but thorough.`;

    const messages = [
      { role: 'user', content: contextPrompt }
    ];

    return this.callAnthropic(apiKey, messages, 1500);
  }
}

// Export singleton instance
export const aiService = new AIService();