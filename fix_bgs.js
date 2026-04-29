import fs from 'fs';
import path from 'path';

function findSelectors(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      findSelectors(full);
    } else if (full.endsWith('.css')) {
      const content = fs.readFileSync(full, 'utf8');
      const blocks = content.split('}');
      const toFix = [];
      let newContent = content;
      let changed = false;

      blocks.forEach((block, idx) => {
        if (!block.trim()) return;
        const pts = block.split('{');
        if (pts.length < 2) return;
        const selector = pts[0].trim();
        const rules = pts[1];

        if (rules.includes('background: var(--color-primary)') || rules.includes('background-color: var(--color-primary)')) {
          if (!/(btn|icon|hover|link|play|badge|avatar|circle|indicator|step-number|progress-bar|social)/i.test(selector)) {
            console.log(full, selector);
            
            // Auto fix background
            let newRules = rules.replace(/background:\s*var\(--color-primary\)/g, 'background: var(--color-bg-secondary)');
            newRules = newRules.replace(/background-color:\s*var\(--color-primary\)/g, 'background-color: var(--color-bg-secondary)');
            
            // Auto fix white text
            newRules = newRules.replace(/color:\s*#fff(?:fff)?/gi, 'color: var(--color-text)');
            newRules = newRules.replace(/color:\s*rgba\(255,\s*255,\s*255,\s*[0-9.]+\)/g, 'color: var(--color-text-muted)');
            
            blocks[idx] = pts[0] + '{' + newRules;
            changed = true;
          }
        }
      });

      if (changed) {
        fs.writeFileSync(full, blocks.join('}') + '}', 'utf8');
        console.log('Fixed', full);
      }
    }
  }
}

findSelectors('c:/crusoe/src');
