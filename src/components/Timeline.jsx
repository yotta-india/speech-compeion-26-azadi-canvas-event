import React from 'react';

export default function Timeline() {
  return (
    <>
      <section id="timeline">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Timeline</span>
      <h2>The road to the stage</h2>
      <p>Five dates, one perforated line — tear along as the season unfolds.</p>
    </div>

    <div className="timeline reveal">
      <div className="tl-item">
        <span className="tl-node"><svg className="icon" aria-hidden="true"><use href="#icon-calendar"/></svg></span>
        <div className="tl-date">25 July</div>
        <div className="tl-title">Registration Opens</div>
      </div>

      <div className="tl-item is-milestone">
        <span className="tl-node"><svg className="icon" aria-hidden="true"><use href="#icon-flag"/></svg></span>
        <div className="tl-date">18 August</div>
        <div className="tl-title">Registration Closes &amp; Topic Reveal</div>
      </div>

      <div className="tl-item">
        <span className="tl-node"><svg className="icon" aria-hidden="true"><use href="#icon-users"/></svg></span>
        <div className="tl-date">21 August</div>
        <div className="tl-title">Orientation / Introductory Session</div>
      </div>

      <div className="tl-item is-milestone">
        <span className="tl-node"><svg className="icon" aria-hidden="true"><use href="#icon-mic"/></svg></span>
        <div className="tl-date">22 August</div>
        <div className="tl-title">Speaking Competition</div>
      </div>

      <div className="tl-item">
        <span className="tl-node"><svg className="icon" aria-hidden="true"><use href="#icon-trophy"/></svg></span>
        <div className="tl-date">30 August</div>
        <div className="tl-title">Winner Announcement</div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
