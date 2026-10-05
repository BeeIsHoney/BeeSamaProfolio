import React from 'react';
import { profile } from '../data/portfolio';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${profile.name} home`}>
        <span className="brand-symbol">{profile.initials}</span>
        <span>{profile.name}<span className="accent">.</span></span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a className="nav-contact" href="#contact">Contact</a>
      </nav>
    </header>
  );
}
