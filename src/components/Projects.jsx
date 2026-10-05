import React from 'react';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const categories = [
    {
      title: 'Live websites',
      items: projects.filter(project => !project.sourceUrl),
    },
    {
      title: 'GitHub projects',
      items: projects.filter(project => project.sourceUrl),
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>My projects<span className="accent">.</span></h2>

      <div className="project-categories">
        {categories.map(category => (
          <details
            className="project-category"
            key={category.title}
            open={category.items.length > 0}
          >
            <summary>
              <h3>{category.title}</h3>
              <span className="category-toggle" aria-hidden="true" />
            </summary>

            <div className="category-content">
              {category.items.length ? (
                <div className="project-grid">
                  {category.items.map(project => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              ) : (
                <p className="project-empty">No projects added yet.</p>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}