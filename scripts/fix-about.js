const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "src", "components", "sections", "about.tsx");
let content = fs.readFileSync(filePath, "utf-8");

// The grid container div is missing its closing </div> tag.
// Current: ...</div>\n      <div className="pointer-events-none...
// Need:    ...</div>\n      </div>\n      <div className="pointer-events-none...

// Find the pattern and fix it
const searchStr = `        </div>
      <div
        className="pointer-events-none"`;
const replaceStr = `        </div>
      <div
        className="pointer-events-none"`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log("Fixed: added missing </div>");
} else {
  console.log("Pattern not found. File content:");
  console.log(content);
}
