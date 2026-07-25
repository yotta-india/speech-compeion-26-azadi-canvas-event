import React from 'react';

export default function FAQ() {
  return (
    <>
      <section id="faq">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">FAQ</span>
      <h2>Frequently asked questions</h2>
    </div>

    <div className="faq-list reveal">
      <div className="faq-item" aria-expanded="false">
        <button className="faq-q">
          Who can participate?
          <span className="plus" aria-hidden="true"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">The competition is open to everyone — there are no age, background, or experience restrictions.</div></div>
      </div>

      <div className="faq-item" aria-expanded="false">
        <button className="faq-q">
          Is there any registration fee?
          <span className="plus" aria-hidden="true"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">Details on registration fees, if any, will be shared on the registration page.</div></div>
      </div>

      <div className="faq-item" aria-expanded="false">
        <button className="faq-q">
          What language is allowed?
          <span className="plus" aria-hidden="true"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">Speeches must be delivered in English only.</div></div>
      </div>

      <div className="faq-item" aria-expanded="false">
        <button className="faq-q">
          How will topics be shared?
          <span className="plus" aria-hidden="true"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">Three topics will be revealed to all registered participants on Topic Reveal day, 18 August.</div></div>
      </div>

      <div className="faq-item" aria-expanded="false">
        <button className="faq-q">
          Will everyone receive a certificate?
          <span className="plus" aria-hidden="true"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">Yes, every participant who takes part in the Speaking Round receives a certificate.</div></div>
      </div>

      <div className="faq-item" aria-expanded="false">
        <button className="faq-q">
          Can I edit my registration later?
          <span className="plus" aria-hidden="true"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">Further instructions on managing your registration will be shared after you sign up.</div></div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
