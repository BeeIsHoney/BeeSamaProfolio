import React from 'react';

function slugify(value = '') {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function ProjectCard({ project }) {
  const slug = project.slug || slugify(project.title);
  const detailsHash = `#project/${slug}`;

  return (
    <article className="showcase-project-card">
      <div className="showcase-project-media">
        <a
          href={detailsHash}
          className="showcase-project-media-link"
          aria-label={`View details for ${project.title}`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="showcase-project-placeholder">
              <span>{project.title}</span>
            </div>
          )}
        </a>
      </div>

      <div className="showcase-project-body">
        <h3><a href={detailsHash}>{project.title}</a></h3>
        <p>{project.description}</p>

        <div className="showcase-project-footer">
          <div className="showcase-project-links">
            {project.liveUrl && (
              <a
                className="showcase-project-live"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                Source <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <a className="showcase-project-details" href={detailsHash}>
            Details <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
