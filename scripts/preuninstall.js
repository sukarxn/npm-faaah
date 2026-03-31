#!/usr/bin/env node

'use strict';

// preuninstall.js — runs automatically before `npm uninstall -g faaah`
// Cleans up PATH changes and shim directory before the package files are removed.

const path = require('path');
const { spawnSync } = require('child_process');

const isTTY = process.stdout.isTTY;
const green = s => isTTY ? `\x1b[32m${s}\x1b[0m` : s;

console.log('');
console.log(`  Cleaning up faaah...`);
console.log('');

const setupScript = path.join(__dirname, '..', 'bin', 'faaah');
spawnSync(process.execPath, [setupScript, 'uninstall'], {
  stdio: 'inherit',
  env: process.env,
});

console.log('');
console.log(`  ${green('✔')} Open a new terminal window to complete uninstall.`);
console.log('');