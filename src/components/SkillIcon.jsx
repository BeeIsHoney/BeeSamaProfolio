import React, { useState } from 'react';

// Devicon SVGs: https://github.com/devicons/devicon
const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/';
const skillIcons = {
  html: 'html5/html5-original.svg',
  html5: 'html5/html5-original.svg',
  css: 'css3/css3-original.svg',
  css3: 'css3/css3-original.svg',
  javascript: 'javascript/javascript-original.svg',
  typescript: 'typescript/typescript-original.svg',
  java: 'java/java-original.svg',
  'core java': 'java/java-original.svg',
  spring: 'spring/spring-original.svg',
  'spring boot': 'spring/spring-original.svg',
  react: 'react/react-original.svg',
  mysql: 'mysql/mysql-original.svg',
  'vs code': 'vscode/vscode-original.svg',
  vscode: 'vscode/vscode-original.svg',
  'visual studio code': 'vscode/vscode-original.svg',
  'intellij idea': 'intellij/intellij-original.svg',
  intellij: 'intellij/intellij-original.svg',
  git: 'git/git-original.svg',
  github: 'github/github-original.svg',
  npm: 'npm/npm-original-wordmark.svg',
  maven: 'maven/maven-original.svg',
  vite: 'vite/vite-original.svg',
  postman: 'postman/postman-original.svg',
  'chrome devtools': 'chrome/chrome-original.svg',
  terminal: 'bash/bash-original.svg',
  'command line': 'bash/bash-original.svg',
};

function normalizeSkillName(name) {
  return name.toLowerCase().replace(/[\s._-]+/g, '');
}

const normalizedIcons = Object.fromEntries(
  Object.entries(skillIcons).map(([name, path]) => [normalizeSkillName(name), path])
);

export default function SkillIcon({ skill }) {
  const [failedSource, setFailedSource] = useState('');
  const name = normalizeSkillName(skill);
  const path = normalizedIcons[name];
  const url = path ? `${iconBase}${path}` : '';
  const lightIcon = ['github', 'terminal', 'commandline'].includes(name);
  const iconStyle = {
    display: 'block',
    width: 22,
    height: 22,
    flexShrink: 0,
    objectFit: 'contain',
  };

  if (!url || failedSource === url) {
    return (
      <svg className="skill-icon" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
        style={{ ...iconStyle, color: 'var(--accent)' }}>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
      </svg>
    );
  }

  return (
    <img
      className="skill-icon"
      src={url}
      alt=""
      aria-hidden="true"
      width="22"
      height="22"
      loading="lazy"
      decoding="async"
      style={{ ...iconStyle, filter: lightIcon ? 'brightness(0) invert(1)' : undefined }}
      onError={() => setFailedSource(url)}
    />
  );
}
