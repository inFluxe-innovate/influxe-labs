const fs = require('fs');
const readline = require('readline');

function recordSession(filePath) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
  });

  const commands = [];

  console.log("Recording commands... Press Ctrl+D to stop.");

  rl.on('line', (input) => {
    commands.push(input);
    console.log(`Logged: ${input}`);
  });

  rl.on('close', () => {
    fs.writeFileSync(filePath, commands.join('\n'), 'utf8');
    console.log(`Session saved to ${filePath}`);
  });
}

module.exports = { recordSession };
