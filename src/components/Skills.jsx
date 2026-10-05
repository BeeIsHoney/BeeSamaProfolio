import React from 'react';
import { skillGroups } from '../data/portfolio';

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>What I'm learning</h2>
      <div className="skill-groups">
        {skillGroups.map(group => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
