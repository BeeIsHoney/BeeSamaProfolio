import React from 'react';
import SkillIcon from './SkillIcon';
import Icon from './Icon';

function DetailImage({ image, title }) {
  if (!image?.src) return null;
  return (
    <figure className={`project-detail-visual ${image.wide ? 'is-wide' : ''}`}>
      <img src={image.src} alt={image.alt || title} loading="lazy" />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <main className="project-detail-main">
        <section className="project-not-found">
          <span className="detail-kicker">404 / project</span>
          <h1>Project not found<span className="accent">.</span></h1>
          <p>The project detail page you opened does not exist.</p>
          <a className="pixel-button" href="/#projects">Back to projects</a>
        </section>
      </main>
    );
  }

  return (
    <main className="project-detail-main">
      <article className="project-detail-page">
        <a className="detail-back" href="/#projects">← Back to projects</a>

        <header className="detail-hero">
          <div className="detail-hero-copy">
            <span className="detail-kicker">Project / {project.type || 'Case study'}</span>
            <h1>{project.title}<span className="accent">.</span></h1>
            <p>{project.longDescription || project.description}</p>

            <div className="detail-tags">
              {project.tags.map(tag => (
                <span key={tag}>
                  <SkillIcon skill={tag} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="detail-actions">
              {project.liveUrl && (
                <a className="pixel-button detail-primary-action" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit live project ↗
                </a>
              )}
              {project.sourceUrl && (
                <a className="detail-secondary-action" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <Icon type="github" size={20} /> Source code
                </a>
              )}
            </div>
          </div>

          <DetailImage image={project.cover} title={`${project.title} project cover`} />
        </header>

        <section className="detail-summary-grid" aria-label="Project summary">
          <div>
            <span className="detail-label">My role</span>
            <strong>{project.role || 'Full-stack development'}</strong>
          </div>
          <div>
            <span className="detail-label">Frontend</span>
            <strong>{project.frontend || 'React'}</strong>
          </div>
          <div>
            <span className="detail-label">Backend</span>
            <strong>{project.backend || 'Spring Boot'}</strong>
          </div>
          <div>
            <span className="detail-label">Database</span>
            <strong>{project.database || 'MySQL'}</strong>
          </div>
        </section>

        <div className="detail-content">
          <section className="detail-section detail-two-column">
            <div className="detail-section-copy">
              <span className="detail-section-number">01</span>
              <h2>What this project does<span className="accent">.</span></h2>
              <p>{project.overview}</p>
            </div>
            <DetailImage image={project.images?.[0]} title={`${project.title} architecture`} />
          </section>

          <section className="detail-section">
            <div className="detail-section-heading">
              <span className="detail-section-number">02</span>
              <div>
                <h2>What I built<span className="accent">.</span></h2>
                <p>A short breakdown of the main parts I worked on across the project.</p>
              </div>
            </div>

            <div className="detail-feature-grid">
              {(project.work || []).map(item => (
                <article className="detail-feature" key={item.title}>
                  <span className="detail-feature-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section detail-two-column detail-flow-section">
            <DetailImage image={project.images?.[1]} title={`${project.title} user flow`} />
            <div className="detail-section-copy">
              <span className="detail-section-number">03</span>
              <h2>How the main flow works<span className="accent">.</span></h2>
              <p>{project.flowDescription}</p>
              <ul className="detail-list">
                {(project.keyFeatures || []).map(feature => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          </section>

          {project.gallery?.length > 0 && (
            <section className="detail-section">
              <div className="detail-section-heading">
                <span className="detail-section-number">04</span>
                <div>
                  <h2>Project images<span className="accent">.</span></h2>
                  <p>A closer look at the project interface and important screens.</p>
                </div>
              </div>
              <div className="detail-gallery">
                {project.gallery.map((image, index) => (
                  <DetailImage image={image} title={`${project.title} screenshot ${index + 1}`} key={`${image.src}-${index}`} />
                ))}
              </div>
            </section>
          )}
        </div>

        <section className="detail-end">
          <span className="detail-kicker">End / {project.title}</span>
          <h2>Want to see it working?</h2>
          <div className="detail-end-actions">
            {project.liveUrl && <a className="pixel-button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Open live project ↗</a>}
            <a className="detail-secondary-action" href="/#projects">← All projects</a>
          </div>
        </section>
      </article>
    </main>
  );
}
