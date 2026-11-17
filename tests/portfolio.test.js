import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { projects, profile, skillGroups } from '../src/data/portfolio.js';
import { certificates } from '../src/data/certificates.js';

const assetExists = (url) => {
  if (/^https:\/\//.test(url)) return true;
  return typeof url === 'string' && url.startsWith('/')
    && existsSync(join(process.cwd(), 'public', url.slice(1)));
};

test('portfolio has a usable identity and nonempty skill groups', () => {
  assert.ok(profile.name.trim());
  assert.ok(profile.github.trim());
  assert.ok(skillGroups.length > 0);
  for (const group of skillGroups) {
    assert.ok(group.title && group.skills.length);
  }
});

test('projects have distinct slugs, links, screenshots and accurate categories', () => {
  assert.ok(projects.length > 0);
  const slugs = new Set();
  for (const project of projects) {
    assert.ok(project.title && project.slug);
    assert.ok(!slugs.has(project.slug), `Duplicate slug: ${project.slug}`);
    slugs.add(project.slug);
    assert.ok(project.category);
    assert.ok(project.description && project.details?.overview);
    assert.ok(Array.isArray(project.details?.features) && project.details.features.length > 0);
    assert.ok(assetExists(project.image), `Missing image for ${project.title}: ${project.image}`);
    if (project.liveUrl) assert.doesNotThrow(() => new URL(project.liveUrl));
    if (project.sourceUrl) assert.doesNotThrow(() => new URL(project.sourceUrl));
    assert.ok(project.caseStudy?.challenge && project.caseStudy?.approach);
  }
});

test('certificates have unique titles and real images', () => {
  assert.ok(certificates.length > 0);
  const titles = new Set();
  for (const cert of certificates) {
    assert.ok(cert.title && cert.issuer && cert.date);
    assert.ok(!titles.has(cert.title), `Duplicate certificate: ${cert.title}`);
    titles.add(cert.title);
    assert.ok(assetExists(cert.image), `Missing certificate image: ${cert.image}`);
  }
});
