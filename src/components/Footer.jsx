import React from 'react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-inner">
        <div>
          <a className="footer-brand" href="#home" aria-label="Back to homepage">KSH<span>.</span></a>
          <p>Building practical software with Java, Spring Boot, and React.</p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <a href="#projects">Projects</a>
          <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <div className="portfolio-footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed & built with care.</span>
      </div>
    </footer>
  );
}
