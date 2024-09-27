const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Get the scripts directory and ensure it's created
const scriptsDir = path.join(__dirname, '../scripts');
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir);
  console.log('The scripts folder has been created.');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Recording commands... Press Ctrl+D to stop.');

const logFile = process.argv[3] ? `${process.argv[3]}.txt` : 'mysession.txt';
const filePath = path.join(scriptsDir, logFile);
const commands = [];

rl.on('line', (input) => {
  commands.push(input);
  console.log(`Logged: ${input}`);
});

rl.on('close', () => {
  fs.writeFileSync(filePath, commands.join('\n'), 'utf8');
  console.log(`Recording saved to ${filePath}`);
});
