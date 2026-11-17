import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { projects, skillGroups } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import SkillIcon from './SkillIcon';
import { certificates } from '../data/certificates';

const experiences = [
  {
    role: 'NASA Space Apps Challenge 2026 — Hackathon Participant',
    company: 'NASA Space Apps Challenge',
    period: 'November 14–15, 2026',
    description:
      'Participated in the NASA Space Apps Challenge and worked on The Silent Legacy, an interactive 2.5D pixel-art experience about historic exploration equipment left on the Moon and Mars. Contributed to translating NASA mission stories into an accessible, interactive web experience. Received the Galactic Problem Solver participation certificate.',
  },

  {
    role: 'Started My Programming Journey',
    company: 'Self Learning',
    period: '2023',
    description:
      'Began exploring programming and software development, building a foundation in coding concepts and gradually learning how web applications are created.',
  },
  {
    role: 'Structured Development Training',
    company: 'JDC',
    period: '2025',
    description:
      'Decided to take software development more seriously and joined JDC for structured training. Focused on strengthening my programming fundamentals and improving my practical development skills.',
  },
  {
    role: 'Advanced Learning & Development',
    company: 'JDC',
    period: '2026',
    description:
      'Continued my development training at JDC while focusing more deeply on backend and full-stack development, including Java, Spring Boot, databases, APIs, and frontend integration.',
  },
  {
    role: 'Self Study & Freelance Projects',
    company: 'Independent',
    period: '2025 — Present',
    description:
      'Spend my free time learning independently, experimenting with new technologies, and building practical projects. I also work on small freelance projects to gain real-world experience in developing and improving web applications.',
  },
];

const tabs = [
  { id: 'projects', label: 'Projects', icon: 'code' },
  { id: 'certificates', label: 'Certificates', icon: 'award' },
  { id: 'experience', label: 'Experience', icon: 'briefcase' },
  { id: 'stack', label: 'Tech Stack', icon: 'stack' },
];

function TabIcon({ type }) {
  const paths = {
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 6-4 12" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m9 13-1 8 4-2 4 2-1-8" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5h6v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    stack: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type] || paths.code}
    </svg>
  );
}

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const certificateTriggerRef = useRef(null);
  const certificateCloseRef = useRef(null);
  const certificateDialogRef = useRef(null);

  const openCertificate = (certificate, trigger) => {
    certificateTriggerRef.current = trigger;
    setSelectedCertificate(certificate);
  };

  const handleTabKeyDown = (event, index) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0
      : event.key === 'End' ? tabs.length - 1
      : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex].id;
    setActiveTab(nextTab);
    window.requestAnimationFrame(() => document.getElementById(`showcase-tab-${nextTab}`)?.focus());
  };

  const skills = useMemo(() => {
    const unique = new Map();

    skillGroups.forEach((group) => {
      group.skills.forEach((skill) => {
        if (!unique.has(skill)) {
          unique.set(skill, group.title);
        }
      });
    });

    return Array.from(unique, ([name, group]) => ({
      name,
      group,
    }));
  }, []);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setSelectedCertificate(null);
        return;
      }

      if (event.key === 'Tab') {
        const focusable = Array.from(
          certificateDialogRef.current?.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          ) || []
        );
        if (focusable.length === 0) {
          event.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    certificateCloseRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      certificateTriggerRef.current?.focus({ preventScroll: true });
    };
  }, [selectedCertificate]);

  return (
    <>
      <section
        className="showcase-section"
        id="projects"
        aria-labelledby="showcase-title"
      >
        <div className="showcase-shell">
          <header className="showcase-heading">
            <span className="showcase-kicker">MY WORK &amp; JOURNEY</span>
            <h2 id="showcase-title">Portfolio Showcase</h2>
            <p>
              Projects, certificates, experience, and the technologies I use —
              kept together in one place.
            </p>
          </header>

          <div
            className="showcase-tabs"
            role="tablist"
            aria-label="Portfolio sections"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`showcase-tab-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                aria-selected={activeTab === tab.id}
                aria-controls={`showcase-panel-${tab.id}`}
                onKeyDown={(event) => handleTabKeyDown(event, tabs.indexOf(tab))}
                className={`showcase-tab${
                  activeTab === tab.id ? ' is-active' : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="showcase-tab-icon">
                  <TabIcon type={tab.icon} />
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="showcase-content" key={activeTab}>
            {activeTab === 'projects' && (
              <div
                className="showcase-panel"
                id="showcase-panel-projects"
                role="tabpanel"
                aria-labelledby={`showcase-tab-${activeTab}`}
              >
                {projects.length ? (
                  <div className="showcase-project-grid">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.slug || project.title}
                        project={project}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="showcase-empty">
                    <strong>No projects added yet.</strong>
                    <span>
                      Add projects in <code>src/data/portfolio.js</code>.
                    </span>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'certificates' && (
              <div
                className="showcase-panel"
                id="showcase-panel-certificates"
                role="tabpanel"
                aria-labelledby={`showcase-tab-${activeTab}`}
              >
                <div className="certificate-grid">
                  {certificates.map((certificate) => (
                    <button
                      key={certificate.title}
                      type="button"
                      className="certificate-card"
                      onClick={(event) => openCertificate(certificate, event.currentTarget)}
                    >
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        loading="lazy"
                      />

                      <div className="certificate-card-copy">
                        <h3>{certificate.title}</h3>
                        {certificate.issuer && <small>{certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ''}</small>}
                        <span>View Certificate →</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div
                className="showcase-panel"
                id="showcase-panel-experience"
                role="tabpanel"
                aria-labelledby={`showcase-tab-${activeTab}`}
              >
                <div className="experience-panel-heading">
                  <span className="showcase-kicker">MY DEVELOPMENT PATH</span>
                  <h3>Experience &amp; Learning Journey</h3>
                  <p>
                    A timeline of how I started learning programming, developed
                    my skills through structured training, and gained practical
                    experience through self-study and freelance projects.
                  </p>
                </div>

                <div className="experience-list">
                  {experiences.map((item, index) => (
                    <article
                      className="experience-item"
                      key={`${item.role}-${index}`}
                    >
                      <span className="experience-dot" aria-hidden="true" />

                      <div>
                        <span className="experience-period">{item.period}</span>
                        <h3>{item.role}</h3>
                        <strong>{item.company}</strong>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'stack' && (
              <div
                className="showcase-panel"
                id="showcase-panel-stack"
                role="tabpanel"
                aria-labelledby={`showcase-tab-${activeTab}`}
              >
                <div className="tech-stack-grid">
                  {skills.map((skill) => (
                    <div className="tech-stack-card" key={skill.name}>
                      <span className="tech-stack-icon">
                        <SkillIcon skill={skill.name} />
                      </span>
                      <strong>{skill.name}</strong>
                      <span>{skill.group}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedCertificate &&
        createPortal(
          <div
            className="certificate-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-popup-title"
            ref={certificateDialogRef}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedCertificate(null);
              }
            }}
          >
            <div className="certificate-popup-content">
              <button
                type="button"
                className="certificate-popup-close"
                ref={certificateCloseRef}
                aria-label="Close certificate"
                onClick={() => setSelectedCertificate(null)}
              >
                ×
              </button>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
              />

              <div className="certificate-popup-footer">
                <h3 id="certificate-popup-title">{selectedCertificate.title}</h3>
                {selectedCertificate.date && <p>{selectedCertificate.issuer} · {selectedCertificate.date}</p>}
              </div>
            </div>
          </div>,
          document.body,
        )}

    </>
  );
}
