import React from 'react';
import { profile } from '../data/portfolio';
import Icon from './Icon';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1>Hi, I'm<br /><span>{profile.name}.</span><span className="cursor">_</span></h1>
        <p>I'm learning fullStack develop.</p>
        <a className="pixel-button" href="#projects"><Icon type="window" />View my project</a>
      </div>
      <div className="terminal" aria-label="About me">
        <div className="terminal-heading"><span>ABOUT ME</span><span aria-hidden="true">─ □ ×</span></div>
        <div className="terminal-body">
          <div className="code-line"><span className="pink">const</span> me = {'{'}</div>
          <div className="code-line indent">name: <span className="accent">'{profile.name}'</span>,</div>
          <div className="code-line indent">learning: [</div>
          <div className="code-line indent-more"><span className="yellow">'React'</span>, <span className="yellow">'Java'</span>,</div>
          <div className="code-line indent-more"><span className="yellow">'Spring Boot'</span></div>
          <div className="code-line indent">],</div>
          <div className="code-line">{'}'};</div>
        </div>
      </div>
    </section>
  );
}
