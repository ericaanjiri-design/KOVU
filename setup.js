// Run this once with: node setup.js
const fs = require('fs');
const path = require('path');

const dirs = [
  'src',
  'src/components',
  'src/styles',
  'public'
];

dirs.forEach(d => {
  fs.mkdirSync(path.join(__dirname, d), { recursive: true });
  console.log('Created:', d);
});

console.log('All directories created. Now run: npm install && npm run dev');
