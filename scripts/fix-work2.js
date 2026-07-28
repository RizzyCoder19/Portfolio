const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'work', 'Work.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Count divs to understand balance
const divOpen = (content.match(/<div[\s>]/g) || []).length;
const divClose = (content.match(/<\/div>/g) || []).length;
console.log('div opens:', divOpen, 'div closes:', divClose, 'diff:', divOpen - divClose);

// The problem area: after line 193's </div> (closing space-y-2), 
// we need 3 closing divs for rounded-xl, max-w-2xl, and flex size-full
// But the edit tool removed the 3 that were there and left an empty line

// Let's find and fix the exact broken section
// Look for: blank line followed by <div className="absolute bottom-0
const brokenPattern = `                  </div>\n\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"`;
const fixedPattern = `                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"`;

content = content.replace(brokenPattern, fixedPattern);

// Re-check
const dOpen = (content.match(/<div[\s>]/g) || []).length;
const dClose = (content.match(/<\/div>/g) || []).length;
console.log('After fix - div opens:', dOpen, 'div closes:', dClose, 'diff:', dOpen - dClose);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
