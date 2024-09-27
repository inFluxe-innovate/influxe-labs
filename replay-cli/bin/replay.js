const { Command } = require('commander');
const { recordSession } = require('../lib/record');
const { replaySession } = require('../lib/replay');

const program = new Command();

program
  .command('record <file>')
  .description('Record a new session of terminal commands')
  .action((file) => {
    recordSession(`./scripts/${file}.txt`);
  });

program
  .command('replay <file>')
  .description('Replay a saved session of terminal commands')
  .action((file) => {
    replaySession(`./scripts/${file}.txt`);
  });

program.parse(process.argv);
