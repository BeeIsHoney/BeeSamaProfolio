import React from 'react';
import { profile } from '../data/portfolio';
import Icon from './Icon';

const techIcons = {
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  spring: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
};

function StatIcon({ type }) {
  if (type === 'certificate') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="9" r="5" />
        <path d="m9 13-1 8 4-2 4 2-1-8" />
      </svg>
    );
  }

  if (type === 'experience') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21M12 3C9.5 5.5 8.2 8.5 8.2 12S9.5 18.5 12 21" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 5l-2 14" />
    </svg>
  );
}

export default function Hero() {
  const avatars = profile.avatars?.length
    ? profile.avatars
    : ['/profile/avatar-1.svg', '/profile/avatar-2.svg'];
  const defaultAvatar = avatars[0];
  const hoverAvatar = avatars[1] || avatars[0];

  const stats = [
    { label: 'TOTAL PROJECTS', value: '—', type: 'projects' },
    { label: 'CERTIFICATES', value: '—', type: 'certificate' },
    { label: 'YEARS OF EXPERIENCE', value: '—', type: 'experience' },
  ];

  return (
    <>
      <section className="landing-hero" id="home">
        <div className="landing-hero-copy">
          <span className="landing-kicker">BACKEND-FOCUSED FULLSTACK DEVELOPER</span>

          <h1 className="landing-title">
            FullStack
            <span>Developer</span>
          </h1>

          <p className="landing-subtitle">Java · Spring Boot · MySQL · React</p>

          <div className="landing-tech-row" aria-label="Main technologies">
            {Object.entries(techIcons).map(([name, src]) => (
              <span className="landing-tech-icon" key={name} title={name}>
                <img src={src} alt={`${name} logo`} />
              </span>
            ))}
          </div>

          <div className="landing-actions">
            <a href="#projects" className="landing-action landing-action-primary">
              Projects <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="landing-action">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="landing-socials" aria-label="Social links">
            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon type="github" size={17} />
            </a>
            <a href={`https://t.me/${profile.telegram.replace('@', '')}`} target="_blank" rel="noreferrer" aria-label="Telegram">
              <Icon type="telegram" size={17} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon type="mail" size={17} />
            </a>
          </div>
        </div>

        <div className="landing-visual-wrap" aria-label="FullStack developer 3D visual">
          <div className="landing-visual-frame">
            <img
              className="landing-visual-image"
              src="/fullstack-3d.png"
              alt="FullStack developer 3D illustration"
            />
          </div>
        </div>
      </section>

      <section className="hero profile-hero" id="about">
        <div className="profile-hero-inner">
          <h2 className="hero-section-title">About Me</h2>

          <div className="hero-top-row">
            <div
              className="hero-avatar-frame"
              aria-label={`${profile.name} profile image. Hover to preview alternate image.`}
            >
              <img
                className="hero-avatar hero-avatar-default"
                src={defaultAvatar}
                alt={`${profile.name} profile`}
              />
              <img
                className="hero-avatar hero-avatar-hover"
                src={hoverAvatar}
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className="hero-primary-copy">
              <div className="hero-person">
                <div className="hero-name-row">
                  <span className="hero-name">{profile.name}</span>
                  <span className="hero-status-dot" aria-label="Available" />
                </div>

                <div className="hero-socials" aria-label="Social links">
                  <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Icon type="github" size={18} />
                  </a>
                  <a href={`https://t.me/${profile.telegram.replace('@', '')}`} target="_blank" rel="noreferrer" aria-label="Telegram">
                    <Icon type="telegram" size={18} />
                  </a>
                  <a href={`mailto:${profile.email}`} aria-label="Email">
                    <Icon type="mail" size={18} />
                  </a>
                </div>
              </div>

              <h1 className="hero-role">FullStack Developer - SpringBoot</h1>

              <div className="hero-tech-icons" aria-label="Main technologies">
                {Object.entries(techIcons).map(([name, src]) => (
                  <span className="hero-tech-icon" key={name} title={name}>
                    <img src={src} alt={`${name} logo`} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-bottom-copy">
            <p className="hero-intro">
              I mostly build backend systems with{' '}
              <span className="hero-inline-tech">
                <img src={techIcons.java} alt="" aria-hidden="true" /> Java
              </span>{' '}
              and{' '}
              <span className="hero-inline-tech">
                <img src={techIcons.spring} alt="" aria-hidden="true" /> Spring Boot
              </span>
              {' '}— REST APIs, authentication, business logic, and database-backed features with{' '}
              <span className="hero-inline-tech">
                <img src={techIcons.mysql} alt="" aria-hidden="true" /> MySQL
              </span>
              . I use{' '}
              <span className="hero-inline-tech">
                <img src={techIcons.postman} alt="" aria-hidden="true" /> Postman
              </span>{' '}
              to test APIs, verify request and response behavior, debug endpoints, and validate backend
              flows before connecting them to{' '}
              <span className="hero-inline-tech">
                <img src={techIcons.react} alt="" aria-hidden="true" /> React
              </span>
              {' '}on the frontend.
            </p>

            <div className="hero-action-frames" aria-label="Future portfolio actions">
              <span className="hero-action-frame">Download CV</span>
              <span className="hero-action-frame">View Project</span>
            </div>

            <div className="hero-stats" aria-label="Portfolio stats">
              {stats.map((stat) => (
                <div className="hero-stat-card" key={stat.label}>
                  <div className="hero-stat-top">
                    <span className="hero-stat-icon">
                      <StatIcon type={stat.type} />
                    </span>
                    <strong>{stat.value}</strong>
                  </div>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
