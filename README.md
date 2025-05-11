# PolicyTable

[![React Badge](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Redux Badge](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)](https://redux.js.org/)
[![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion Badge](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)

![PolicyTable Demo Screenshot](policy-table-screenshot.png)

## 📑 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [AI Integration](#ai-integration)
- [AI Assistance Used](#ai-assistance-used)
- [Future Improvements](#future-improvements)
- [License](#license)

## 📝 Overview

PolicyTable is a democratic policy discussion platform where users can share policy ideas, upvote/downvote proposals, and engage in structured debates around various policy domains. It provides a structured environment for citizens to propose, discuss, and evaluate policy ideas with evidence-based arguments.

The application includes integration with AI capabilities (via Anthropic's Claude API) to enhance policy discussions through features like AI-generated summaries, research assistance, and more.

## ✨ Features

### Core Features
- **Policy Proposal Submission:** Structured forms for submitting policy ideas with specific fields
- **Topic Categories:** Policy domains organized by categories (healthcare, education, environment, economy)
- **Voting System:** Upvote/downvote functionality with analytics visualization
- **Structured Debate:** Pro/con argument submission with evidence linking
- **User Profiles:** Contribution history and reputation system

### AI Integration
- **User-configurable AI setup:** API key management for Anthropic Claude
- **Policy Summary Generation:** AI-generated concise summaries of policies
- **Research Assistant:** Contextual AI that can answer questions about policy topics
- **Sentiment Analysis:** Analyze debate tone and sentiment
- **Quality/Civility Checking:** Pre-submission content checking

## 🎬 Demo

![PolicyTable Interface](screenshots/policy-table-screenshot.png)

*Screenshot placeholder - Add an application screenshot here*

## 🛠️ Technologies Used

### Frontend
- React 19.1.0
- Redux Toolkit 2.7.0
- React Router DOM 7.5.3
- Tailwind CSS 3.3.0
- Framer Motion 12.10.0
- Anthropic Claude API (via proxy server)

### Backend
- Express.js (lightweight proxy server for API)
- CORS support

## 📦 Installation

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/policy-table.git
cd policy-table
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables (optional):
Create a `.env` file in the root directory with the following variables:
```
REACT_APP_PROXY_SERVER_URL=http://localhost:3001
```

4. Start the development server and proxy server together:
```bash
npm run start:all
# or
yarn start:all
```

This will start:
- React app on http://localhost:3000
- Proxy server on http://localhost:3001

## 🚀 Usage

### Running the Application

1. Start both the React app and proxy server:
```bash
npm run start:all
```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

3. To use AI features:
   - Click on the "Configure AI" button in the header
   - Enter your Anthropic API key (get one from [console.anthropic.com](https://console.anthropic.com))
   - Save your key (it's stored locally in your browser)

### Key User Flows

1. **Browsing Policies:**
   - Visit the homepage
   - Click "Browse Policies"
   - Filter by category using the buttons at the top

2. **Submitting a Policy:**
   - Click "Submit Policy" in the navigation
   - Fill out the structured form with your policy idea
   - Submit and receive confirmation

3. **Participating in Debate:**
   - Click on any policy to view details
   - Add your argument with pro/con/neutral positioning
   - Provide evidence links to support your arguments
   - Reply to other comments to create threaded discussions

4. **Using AI Features:**
   - Configure your API key first
   - On a policy detail page, click "Generate AI Summary"
   - Use the Research Assistant sidebar to ask policy-related questions

## 📁 Project Structure

```
src/
  components/
    ai/              # AI-related components
    debate/          # Debate and comment components
    layout/          # Structural layout components
    policy/          # Policy form and display components
  features/
    ai/              # AI Redux slice
    policies/        # Policies Redux slice
  pages/             # Main application pages
  services/          # AI and API services
  App.js             # Main application component
  index.js           # Application entry point
server.js            # Proxy server for API requests
```

## 🤖 AI Integration

PolicyTable integrates with Anthropic's Claude API to provide several AI-enhanced features:

1. **Policy Summary Generation:**
   - AI-generated concise summaries of policy proposals
   - Highlights key points and implications

2. **Research Assistant:**
   - Interactive chat interface for policy research
   - Provides historical context, comparisons, and analysis
   - Suggests related policies and considerations

3. **Sentiment Analysis:**
   - Analyzes the tone and sentiment of debates
   - Helps maintain civil discourse

4. **Quality Checking:**
   - Pre-submission content evaluation
   - Suggests improvements for clarity and civility

Note: To use these features, you must provide your own Anthropic API key.

## 🧠 AI Assistance Used

During the development of PolicyTable, I used AI assistance in the following ways:

1. **Code Structure Planning:**
   - Used Claude to brainstorm overall component architecture
   - Got help designing the Redux state structure

2. **Redux Implementation:**
   - AI helped with designing the policies slice with normalized state
   - Assisted with creating efficient reducers and selectors

3. **UI Component Design:**
   - Got suggestions for styling and animations
   - Used AI to generate Tailwind CSS classes for responsive design

4. **API Integration:**
   - Received help designing the AI service layer
   - Debugged issues with the proxy server implementation

5. **Error Handling and Edge Cases:**
   - Used AI to identify potential error cases
   - Implemented comprehensive error handling based on suggestions

The AI was used as a collaborative partner, but all code implementation decisions and final architecture choices were made by me. I critically evaluated all suggestions and made adjustments based on my understanding of best practices and project requirements.

## 🔮 Future Improvements

- **User Authentication:** Add user accounts with profiles and authentication
- **Enhanced AI Features:** Implement policy conflict detection and resolution suggestions
- **Improved Visualizations:** Add data visualizations for policy impact analysis
- **Mobile App:** Develop a companion mobile application
- **Collaboration Tools:** Add features for collaborative policy drafting
- **Integration with Public Data APIs:** Connect with government data sources

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Rocko Paul