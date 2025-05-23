import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import PoliciesPage from './pages/PoliciesPage';
import PolicyDetailPage from './pages/PolicyDetailPage';
import AboutPage from './pages/AboutPage';
import SubmitPolicyPage from './pages/SubmitPolicyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/policies/:id" element={<PolicyDetailPage />} />
            <Route path="/submit-policy" element={<SubmitPolicyPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;