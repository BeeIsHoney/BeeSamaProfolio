import React from 'react';
import { projects } from '../data/portfolio';

function FeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 2.1 4.25L19 8l-3.5 3.4.82 4.8L12 14l-4.32 2.2.82-4.8L5 8l4.9-.75L12 3Z" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  );
}

export default function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="jg-project-not-found">
        <span>PROJECT NOT FOUND</span>
        <h1>That project does not exist.</h1>
        <a href="#projects">← Back to Projects</a>
      </section>
    );
  }

  const details = project.details || {};
  const technologies = details.technologies || project.tags || [];
  const features = details.features || [];
  const caseStudy = details.caseStudy;

  return (
    <section className="jg-project-detail-page" aria-labelledby="jg-project-title">
      <div className="jg-detail-nav">
        <a className="jg-detail-back" href="#projects">
          <span aria-hidden="true">←</span>
          Back
        </a>

        <div className="jg-detail-breadcrumb" aria-label="Breadcrumb">
          <a href="#projects">Projects</a>
          <span aria-hidden="true">›</span>
          <span>{project.title}</span>
        </div>
      </div>

      <div className="jg-detail-grid">
        <div className="jg-detail-copy">
          <span className="jg-detail-kicker">{details.category || 'FULL-STACK PROJECT'}</span>

          <h1 id="jg-project-title">{project.title}</h1>
          <span className="jg-detail-title-line" aria-hidden="true" />

          <p className="jg-detail-description">
            {details.overview || project.description}
          </p>

          <div className="jg-detail-stats" aria-label="Project summary">
            <div className="jg-detail-stat">
              <span className="jg-detail-stat-icon"><TechIcon /></span>
              <div>
                <strong>{technologies.length}</strong>
                <span>Technologies</span>
              </div>
            </div>

            <div className="jg-detail-stat">
              <span className="jg-detail-stat-icon jg-detail-stat-icon-feature"><FeatureIcon /></span>
              <div>
                <strong>{features.length}</strong>
                <span>Core Features</span>
              </div>
            </div>
          </div>

          <div className="jg-detail-actions">
            {project.liveUrl && (
              <a
                className="jg-detail-live"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.sourceUrl && (
              <a
                className="jg-detail-source"
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <div className="jg-detail-tech">
            <div className="jg-detail-section-label">
              <TechIcon />
              <span>Technologies Used</span>
            </div>

            <div className="jg-detail-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="jg-detail-side">
          <figure className="jg-detail-preview">
            <img src={project.image} alt={`${project.title} website preview`} />
          </figure>

          <article className="jg-detail-features">
            <h2>
              <FeatureIcon />
              Key Features
            </h2>

            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      {caseStudy && (
        <div className="case-study">
          <section className="case-study-intro" aria-labelledby="case-study-challenge">
            <span className="case-study-eyebrow">01 / PROBLEM & CONTEXT</span>
            <h2 id="case-study-challenge">The challenge behind the product</h2>
            <p>{caseStudy.challenge}</p>
          </section>

          <section className="case-study-approach" aria-labelledby="case-study-approach">
            <div>
              <span className="case-study-eyebrow">02 / ENGINEERING APPROACH</span>
              <h2 id="case-study-approach">How the system fits together</h2>
              <p>Architecture and product decisions matter more than a long list of tools.</p>
            </div>
            <ol className="case-study-steps">
              {caseStudy.approach.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>
              ))}
            </ol>
          </section>

          <div className="case-study-diagrams">
            {caseStudy.architectureImage && (
              <figure>
                <img src={caseStudy.architectureImage} loading="lazy" decoding="async" alt="High-level React, Spring Boot, and MySQL architecture diagram" />
                <figcaption>System architecture · high-level overview</figcaption>
              </figure>
            )}
            {caseStudy.flowImage && (
              <figure>
                <img src={caseStudy.flowImage} loading="lazy" decoding="async" alt="User journey from browsing to order and wallet top-up" />
                <figcaption>Customer journey · product to order</figcaption>
              </figure>
            )}
          </div>

          <section className="case-study-takeaway" aria-labelledby="case-study-learning">
            <span className="case-study-eyebrow">03 / WHAT IT DEMONSTRATES</span>
            <h2 id="case-study-learning">What I learned from building it</h2>
            <p>{caseStudy.learning}</p>
            <a href="#projects">Explore more work <span aria-hidden="true">↗</span></a>
          </section>
        </div>
      )}
    </section>
  );
}
