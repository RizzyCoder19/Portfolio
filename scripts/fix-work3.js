const fs = require('fs');

const filePath = 'g:/Portfolio/src/components/sections/work/Work.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The problem: the hero visual section has broken div nesting
// After <div className="space-y-2">...</div> closings
// we need: </div> (rounded-xl) -> </div> (max-w-2xl) -> </div> (flex) -> </div> (absolute inset-0)
// Currently we have: </div>\n</div>\n          </div>

// Find the unique broken pattern by looking for the exact text
const marker = '<div className="mt-4 h-24 w-full rounded border border-border/10 bg-gradient-to-br from-primary/[0.02] to-transparent" />';

const markerIdx = content.indexOf(marker);
if (markerIdx === -1) {
  console.error('Could not find marker in file!');
  process.exit(1);
}

// Find what comes after the marker
const afterMarker = content.substring(markerIdx + marker.length);

// The current broken sequence (what we want to replace)
const currentClose = '/>\n</div>\n              </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"';

if (!afterMarker.includes(currentClose)) {
  console.error('Expected pattern not found after marker');
  console.log('Found instead:', JSON.stringify(afterMarker.substring(0, 200)));
  process.exit(1);
}

// The correct close sequence with 4 closing divs (space-y-2, rounded-xl, max-w-2xl, flex)
const correctClose = `/>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"`;

content = content.replace(
  marker + currentClose,
  marker + correctClose
);

// Verify
const divOpens = (content.match(/<div[\s>]/g) || []).length;
const divCloses = (content.match(/<\/div>/g) || []).length;
const motionOpens = (content.match(/<motion\.\w+[\s>]/g) || []).length;
const motionCloses = (content.match(/<\/motion\.\w+>/g) || []).length;

console.log('div opens:', divOpens, 'closes:', divCloses, 'diff:', divOpens - divCloses);
console.log('motion opens:', motionOpens, 'closes:', motionCloses, 'diff:', motionOpens - motionCloses);

fs.writeFileSync(filePath, content, 'utf8');
console.log('File fixed successfully!');
