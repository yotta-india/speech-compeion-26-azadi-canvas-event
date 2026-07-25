import React from 'react';

export default function Rewards() {
  return (
    <>
      <section id="rewards">
  <div className="wrap">
    <div className="rewards reveal">
      <div className="section-head">
        <span className="eyebrow" style={{ color: 'var(--saffron)' }}>Rewards</span>
        <h2>What every speaker takes home</h2>
      </div>
      <div className="rewards-grid">
        <div className="reward-item">
          <svg className="r-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-3.5 1.5L7 22l5-2.5L17 22l-1.5-5.5"/></svg>
          <h4>Certificate for every participant</h4>
          <p>Recognition of your effort, awarded to every speaker who takes the stage.</p>
        </div>
        <div className="reward-item">
          <svg className="r-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 2 7l10 5 10-5-10-5Zm0 10-10 5 10 5 10-5-10-5Z"/></svg>
          <h4>Recognition for outstanding speakers</h4>
          <p>Standout performances are highlighted across the AZADI CANVAS community.</p>
        </div>
        <div className="reward-item">
          <svg className="r-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2"/></svg>
          <h4>Winners announced 30 August</h4>
          <p>Results shared publicly at the close of the competition season.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
