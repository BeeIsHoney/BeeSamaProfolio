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

  const openDetails = () => {
    window.location.hash = detailsHash;
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDetails();
    }
  };

  return (
    <article
      className="showcase-project-card"
      role="link"
      tabIndex={0}
      aria-label={`View ${project.title} project details`}
      onClick={openDetails}
      onKeyDown={handleKeyDown}
    >
      <div className="showcase-project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        ) : (
          <div className="showcase-project-placeholder" aria-hidden="true">
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className="showcase-project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="showcase-project-footer">
          <div className="showcase-project-links">
            {project.liveUrl && (
              <a
                className="showcase-project-live"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Source <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <button
            type="button"
            className="showcase-project-details"
            onClick={(event) => {
              event.stopPropagation();
              openDetails();
            }}
          >
            Details <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
