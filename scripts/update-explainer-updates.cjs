#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');

const root = path.resolve(__dirname, '..');
const catalogPath = path.join(root, 'references', 'paper-catalog.json');

try {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  if (!catalog.explainers || typeof catalog.explainers !== 'object' || Array.isArray(catalog.explainers)) {
    throw new Error('The catalogue must contain an explainers map of first-publication dates.');
  }

  const updates = {};
  for (const [explainerPath, published] of Object.entries(catalog.explainers)) {
    if (!/^\.\/papers\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(explainerPath)) {
      throw new Error('Invalid explainer path: ' + explainerPath);
    }
    if (typeof published !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(published)) {
      throw new Error('Invalid first-publication date for ' + explainerPath);
    }
    const first = new Date(published + 'T00:00:00Z');
    if (!Number.isFinite(first.getTime()) || first.toISOString().slice(0, 10) !== published) {
      throw new Error('Invalid first-publication date for ' + explainerPath + ': ' + published);
    }

    const committed = execFileSync('git', ['log', '-1', '--format=%cI', '--', explainerPath.slice(2)], {
      cwd: root,
      encoding: 'utf8'
    }).trim();
    const last = committed ? Date.parse(committed) : first.getTime();
    if (!Number.isFinite(last)) {
      throw new Error('Invalid Git commit date for ' + explainerPath + ': ' + committed);
    }
    updates[explainerPath] = new Date(Math.max(first.getTime(), last)).toISOString();
  }

  catalog.explainerUpdates = updates;
  fs.writeFileSync(catalogPath, JSON.stringify(catalog) + '\n');
  console.log('Updated timestamps for ' + Object.keys(updates).length + ' explainers.');
} catch (error) {
  console.error('Could not update explainer timestamps: ' + error.message);
  process.exitCode = 1;
}
