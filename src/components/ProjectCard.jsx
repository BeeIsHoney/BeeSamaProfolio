import React from 'react';
import Icon from './Icon';
import SkillIcon from './SkillIcon';

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.image ? ' has-image' : ''}`}>
      {project.image && (
        <img className="project-image" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      )}
      <div className="card-content">
        <div className="project-card-title">
          <span className="project-icon"><Icon type={project.sourceUrl ? 'github' : 'window'} size={24} /></span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, maxWidth: '100%', overflowWrap: 'anywhere' }}>
              <SkillIcon skill={tag} />
              {tag}
            </span>
          ))}
        </div>
        <div className="project-actions">
          {project.liveUrl && <a className="project-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit website</a>}
          {project.sourceUrl && <a className="project-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer"><Icon type="github" size={20} />Source code</a>}
        </div>
      </div>
    </article>
  );
}
