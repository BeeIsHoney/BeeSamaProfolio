import React from 'react';
import { skillGroups } from '../data/portfolio';
import SkillIcon from './SkillIcon';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">What I'm learning</h2>
      <dl className="skills-panel">
        {skillGroups.map(group => (
          <div className="skills-row" key={group.title}>
            <dt>{group.title}</dt>
            <dd>
              <ul className="skills-values">
                {group.skills.map(skill => (
                  <li key={skill}>
                    <SkillIcon skill={skill} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
