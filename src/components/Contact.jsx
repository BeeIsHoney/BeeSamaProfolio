import React from 'react';
import { profile } from '../data/portfolio';
import Icon from './Icon';

function githubHref(value) {
  if (!value) return '#';
  if (/^https?:\/\//i.test(value)) return value;
  return `https://github.com/${value.replace(/^@/, '')}`;
}

function telegramHref(value) {
  if (!value) return '#';
  if (/^https?:\/\//i.test(value)) return value;
  return `https://t.me/${value.replace(/^@/, '')}`;
}

export default function Contact() {
  const links = [
    {
      type: 'mail',
      label: 'Email',
      href: `mailto:${profile.email}`,
    },
    {
      type: 'github',
      label: 'GitHub',
      href: githubHref(profile.github),
    },
    {
      type: 'telegram',
      label: 'Telegram',
      href: telegramHref(profile.telegram),
    },
  ];

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <span className="contact-kicker">CONTACT</span>
        <h2 id="contact-title">Let's talk.</h2>
        <p>Have a project in mind or just want to connect? Reach me here.</p>
      </div>

      <div className="contact-links" aria-label="Contact links">
        {links.map((link) => (
          <a
            key={link.type}
            className="contact-link"
            href={link.href}
            target={link.type === 'mail' ? undefined : '_blank'}
            rel={link.type === 'mail' ? undefined : 'noopener noreferrer'}
          >
            <Icon type={link.type} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
