import React from 'react';
import './LandingSection.css';

function LandingSection() {
  return (
    <section className="landing">
      <h1>Explore the Future</h1>
      <p>Your gateway to innovation</p>
      <div className="buttons">
        <button className="btn primary">Get Started</button>
        <button className="btn secondary">Learn More</button>
      </div>
    </section>
  );
}

export default LandingSection;