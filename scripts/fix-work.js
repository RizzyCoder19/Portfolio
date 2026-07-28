const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'work', 'Work.tsx');
let c = fs.readFileSync(filePath, 'utf8');

// Fix the broken div nesting in hero visual section
// Replace the broken close sequence with properly balanced one
c = c.replace(
  '                  </div>\n </div>\n              </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"',
  '                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div\n            className="absolute bottom-0 left-0 right-0 h-px"'
);

// Verify
const opens = (c.match(/<[a-zA-Z][\w.-]*(?:\s|>)/g) || []).length;
const closes = (c.match(/<\//g) || []).length;
console.log('Opens:', opens, 'Closes:', closes, 'Net:', opens - closes);

fs.writeFileSync(filePath, c, 'utf8');
console.log('Fixed:', filePath);
