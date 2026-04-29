import fs from 'fs';
import path from 'path';

function fixSyntax(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      fixSyntax(full);
    } else if (full.endsWith('.css')) {
      let content = fs.readFileSync(full, 'utf8');
      content = content.trim();
      if (content.endsWith('}')) {
        // Find if there is an unbalanced }
        let open = 0, close = 0;
        for (let i=0; i<content.length; i++) {
          if (content[i] === '{') open++;
          if (content[i] === '}') close++;
        }
        if (close > open && content.endsWith('}')) {
           content = content.substring(0, content.lastIndexOf('}')).trim();
           fs.writeFileSync(full, content + '\n', 'utf8');
           console.log('Fixed syntax in', full);
        }
      }
    }
  }
}

fixSyntax('c:/crusoe/src');
