#!/usr/bin/env node

'use strict';

// postinstall.js — runs automatically after `npm install -g faaah`
// Now that "npm" is NOT in the bin field, the real npm is never overwritten,
// so `which npm` here safely returns the real npm. We can run setup automatically.

const path = require('path');
const { spawnSync } = require('child_process');

const isTTY = process.stdout.isTTY;
const bold  = s => isTTY ? `\x1b[1m${s}\x1b[0m`  : s;
const green = s => isTTY ? `\x1b[32m${s}\x1b[0m` : s;
const dim   = s => isTTY ? `\x1b[2m${s}\x1b[0m`  : s;

console.log('');
console.log(`  ${green('✔')} faaah installed! Setting up...`);
console.log('');

// Run setup automatically
const setupScript = path.join(__dirname, '..', 'bin', 'faaah');
const result = spawnSync(process.execPath, [setupScript, 'setup'], {
  stdio: 'inherit',
  env: process.env,
});

if (result.status !== 0) {
  console.log('');
  console.log(`  Setup encountered an issue. Run manually:`);
  console.log(`    ${bold('faaah setup')}`);
  console.log('');
} else {
  console.log('');
  console.log(`  ${green('✔')} Open a new terminal window and you are good to go!`);
  console.log(`  ${dim('Every npm command will play a sound when it completes.')}`);
  console.log('');
}