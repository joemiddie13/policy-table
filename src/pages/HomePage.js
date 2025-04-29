import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to PolicyTable</h1>
      <p>A democratic platform for policy discussion and debate</p>
      <div className="features">
        <div className="feature">
          <h2>Share Ideas</h2>
          <p>Submit your policy proposals for community discussion</p>
        </div>
        <div className="feature">
          <h2>Engage in Debate</h2>
          <p>Participate in structured debates with evidence-based arguments</p>
        </div>
        <div className="feature">
          <h2>Vote on Policies</h2>
          <p>Upvote good policy ideas and help them gain traction</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;