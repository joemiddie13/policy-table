import React from 'react';

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Policy Table</h1>
      <p>
        PolicyTable is a platform for democratic policy discussion, 
        where citizens can propose, debate, and vote on policy ideas.
      </p>
      <h2>Our Mission</h2>
      <p>
        To create a space for civil, evidence-based policy discussions 
        that bring diverse perspectives to the table.
      </p>
      <h2>How It Works</h2>
      <ol>
        <li>Users submit policy proposals in structured format</li>
        <li>Community members vote on proposals</li>
        <li>Structured debates allow for pro/con arguments</li>
        <li>Evidence linking provides factual backing to claims</li>
      </ol>
    </div>
  );
}

export default AboutPage;