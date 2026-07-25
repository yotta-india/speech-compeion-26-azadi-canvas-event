import React from 'react';

export default function About() {
  return (
    <>
      <section id="about">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Event Overview</span>
      <h2>Everything you need to know, at a glance</h2>
      <p>The essentials of the competition, laid out like an admission card — keep it handy through the season.</p>
    </div>

    <div className="overview-grid reveal">
      <div className="ticket-card tint-saffron">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-calendar"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Registration</div>
        </div>
        <div className="tk-value">25 July – 18 August</div>
      </div>
      <div className="ticket-card tint-cream">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-star"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Topic Reveal</div>
        </div>
        <div className="tk-value">18 August</div>
      </div>
      <div className="ticket-card tint-green">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-users"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Session</div>
        </div>
        <div className="tk-value">21 August</div>
      </div>
      <div className="ticket-card tint-ivory">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-mic"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Speaking Round</div>
        </div>
        <div className="tk-value">22 August</div>
      </div>
      <div className="ticket-card tint-saffron">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-trophy"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Winner Announcement</div>
        </div>
        <div className="tk-value">30 August</div>
      </div>
      <div className="ticket-card tint-cream">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-pin"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Mode</div>
        </div>
        <div className="tk-value">Online</div>
      </div>
      <div className="ticket-card tint-green">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-medal"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Eligibility</div>
        </div>
        <div className="tk-value">Open to Everyone</div>
      </div>
      <div className="ticket-card tint-ivory">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-globe"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Language</div>
        </div>
        <div className="tk-value">English</div>
      </div>
      <div className="ticket-card tint-saffron">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-clock"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Speaking Time</div>
        </div>
        <div className="tk-value">2 Minutes</div>
      </div>
      <div className="ticket-card tint-cream">
        <span className="tk-icon"><svg className="icon" aria-hidden="true"><use href="#icon-message"/></svg></span>
        <div className="tk-head">
          <div className="tk-label">Topics</div>
        </div>
        <div className="tk-value" style={{ fontSize: '1rem' }}>Three topics revealed on Topic Reveal day</div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
