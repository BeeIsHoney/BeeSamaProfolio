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
  const caseStudy = project.caseStudy;

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
          <span className="jg-detail-kicker">{project.category || 'PROJECT'}</span>

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
            <img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" />
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
        <section className="jg-case-study" aria-labelledby="jg-case-study-title">
          <span className="jg-detail-kicker">BEHIND THE PROJECT</span>
          <h2 id="jg-case-study-title">Engineering Case Study</h2>
          <div className="jg-case-study-grid">
            <div>
              <h3>The Challenge</h3>
              <p>{caseStudy.challenge}</p>
            </div>
            <div>
              <h3>My Approach</h3>
              <p>{caseStudy.approach}</p>
            </div>
          </div>
          {caseStudy.highlights?.length > 0 && (
            <div className="jg-case-study-highlights">
              <h3>Implementation Highlights</h3>
              <ul>
                {caseStudy.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </section>
  );
}
