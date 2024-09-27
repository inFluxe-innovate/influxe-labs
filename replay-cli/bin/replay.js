#!/usr/bin/env node

const { program } = require('commander');
const record = require('../lib/record');
const replay = require('../lib/replay');

// Initialize the CLI program
program
  .version('2.0.1')
  .description('Replay CLI - Record and replay terminal command sequences');

// Command to start recording
program
  .command('record <filename>')
  .description('Start recording terminal commands and save to the specified file')
  .action((filename) => {
    record(filename);
  });

// Command to replay recorded commands
program
  .command('replay <filename>')
  .description('Replay recorded terminal commands from the specified file')
  .action((filename) => {
    replay(filename);
  });

// Parse command-line arguments
program.parse(process.argv);
