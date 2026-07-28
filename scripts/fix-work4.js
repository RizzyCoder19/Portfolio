const fs = require('fs');

const filePath = 'g:/Portfolio/src/components/sections/work/Work.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The marker includes the /> that closes the last div
const oldText = 'to-transparent" />\n</div>\n              </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"';

// Need 4 closing divs: space-y-2, rounded-xl, max-w-2xl, flex size-full
const newText = 'to-transparent" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"';

const idx = content.indexOf(oldText);
if (idx === -1) {
  console.error('Pattern not found!');
  // Show what IS near the marker
  const markerIdx = content.indexOf('from-primary/');
  if (markerIdx > -1) {
    const snippet = content.substring(markerIdx + 70, markerIdx + 200);
    console.log('Found near marker:', JSON.stringify(snippet));
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
