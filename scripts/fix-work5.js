const fs = require('fs');

const filePath = 'g:/Portfolio/src/components/sections/work/Work.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Exact text from lines 192-197 identified via read_file
const oldText = '<div className="mt-4 h-24 w-full rounded border border-border/10 bg-gradient-to-br from-primary/[0.02] to-transparent" />\n</div>\n              </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"';

// Need 4 closing divs: space-y-2 (already has one), then rounded-xl, max-w-2xl, flex size-full
const newText = '<div className="mt-4 h-24 w-full rounded border border-border/10 bg-gradient-to-br from-primary/[0.02] to-transparent" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"';

const idx = content.indexOf(oldText);
if (idx === -1) {
  console.error('Pattern not found!');
  // Let's look at what's around line 192
  const lines = content.split('\n');
  for (let i = 190; i <= 198 && i < lines.length; i++) {
    console.log(i+1 + ': ' + JSON.stringify(lines[i]));
  }
  process.exit(1);
}

content = content.replace(oldText, newText);

// Verify div balance
const divOpens = (content.match(/<div[\s>]/g) || []).length;
const divCloses = (content.match(/<\/div>/g) || []).length;
const motionOpens = (content.match(/<motion\.\w+[\s>]/g) || []).length;
const motionCloses = (content.match(/<\/motion\.\w+>/g) || []).length;

console.log('div opens:', divOpens, 'closes:', divCloses, 'diff:', divOpens - divCloses);
console.log('motion opens:', motionOpens, 'closes:', motionCloses, 'diff:', motionOpens - motionCloses);

fs.writeFileSync(filePath, content, 'utf8');
console.log('File fixed successfully!');
