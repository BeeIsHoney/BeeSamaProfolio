import React from 'react';
import { profile } from '../data/portfolio';
import Icon from './Icon';

function getContactValue(type, value) {
  if (!value) return 'Not added yet';
  if (type === 'mail') return value;

  let username = value;
  try {
    username = new URL(value).pathname.split('/').filter(Boolean)[0] || value;
  } catch {
    // Accept a username directly as well as a profile URL.
  }
  return type === 'telegram' ? `@${username.replace(/^@/, '')}` : username;
}

function ContactLink({ type, label, value, href }) {
  const content = (
    <>
      <Icon type={type} />
      <span style={{ display: 'grid', gap: '4px', flex: 1, minWidth: 0 }}>
        <span style={{ color: 'var(--accent)' }}>{label}</span>
        <span style={{ color: 'var(--muted)', overflowWrap: 'anywhere' }}>
          {getContactValue(type, value)}
        </span>
      </span>
    </>
  );
  return value ? (
    <a className="contact-link" href={href} target={type === 'mail' ? undefined : '_blank'} rel="noopener noreferrer">{content}</a>
  ) : <div className="contact-link contact-placeholder">{content}</div>;
}

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy"><h2>Let's <span>talk.</span></h2><p>You can reach me here.</p></div>
      <div className="contact-links">
        <ContactLink type="mail" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <ContactLink type="github" label="GitHub" value={profile.github} href={profile.github} />
        <ContactLink type="telegram" label="Telegram" value={profile.telegram} href={profile.telegram} />
      </div>
    </section>
  );
}
