const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "src", "components", "sections", "about.tsx");
let content = fs.readFileSync(filePath, "utf-8");

// The file currently has the structure:
// <div className="col-span-1 lg:col-span-5">
//   <AboutPortrait />
// </div>
// <div
//   className="pointer-events-none...
//
// But the outer grid <div> is missing its closing </div>.
// After </div> (closing the portrait wrapper), we need another </div> 
// to close the grid container before the dissolve div.

// Replace: portrait's </div> followed by dissolve div opening
// With: portrait's </div> + grid's </div> + dissolve div opening
const search = '<AboutPortrait />\n        </div>\n      <div\n        className="pointer-events-none';
const replace = '<AboutPortrait />\n        </div>\n      </div>\n      <div\n        className="pointer-events-none';

if (content.includes(search)) {
  content = content.replace(search, replace);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log("FIXED: Added missing </div> for grid container");
} else {
  console.log("Pattern NOT found. Current content:");
  console.log(JSON.stringify(content));
}
