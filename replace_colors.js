import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const SRC_DIR = 'c:/crusoe/src';

const HEX_MAP = {
  // BGs
  '#F5FFF8': '#FFFFFF',
  '#E8F5EC': '#F5F7F6',
  '#003D17': '#F5F7F6',
  
  // Texts
  '#0A0A0A': '#333333',
  '#4F4F4F': '#666666',
  
  // Accents
  '#006E23': '#84BD00',
  '#1FAF5A': '#84BD00',
  '#12A84E': '#84BD00',
  '#065F46': '#84BD00',
  '#064E3B': '#84BD00',
  '#2DCF6A': '#84BD00',
  
  // Others
  '#25D366': '#84BD00',
  '#128C7E': '#73A500', 
  
  // Remove other random colors
  '#1D4ED8': '#84BD00',
  '#B45309': '#84BD00',
  '#6D28D9': '#84BD00',
  '#BE185D': '#84BD00',
  '#C2410C': '#84BD00'
};

function getAllFiles(dirPath, arrayOfFiles) {
  const files = readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach((file) => {
    const fullPath = join(dirPath, file);
    if (statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
        arrayOfFiles.push(fullPath);
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(SRC_DIR);

files.forEach(file => {
  let content = readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace Hexes
  for (const [oldHex, newHex] of Object.entries(HEX_MAP)) {
    const regex = new RegExp(oldHex, 'gi');
    content = content.replace(regex, newHex);
  }

  // Replace rgba & rgb
  // rgba(0, 110, 35, x) -> rgba(132, 189, 0, x)
  content = content.replace(/rgba\(\s*0\s*,\s*110\s*,\s*35\s*,\s*([0-9.]+)\s*\)/g, 'rgba(132, 189, 0, $1)');
  // rgba(31, 175, 90, x) -> rgba(132, 189, 0, x)
  content = content.replace(/rgba\(\s*31\s*,\s*175\s*,\s*90\s*,\s*([0-9.]+)\s*\)/g, 'rgba(132, 189, 0, $1)');
  
  // Replace rgb(0, 110, 35) -> #84BD00
  content = content.replace(/rgb\(\s*0\s*,\s*110\s*,\s*35\s*\)/g, '#84BD00');

  // Kill Gradients in CSS
  if (file.endsWith('.css')) {
    // If it's a linear-gradient background that is meant to be primary
    // like linear-gradient(135deg, #84BD00, ...) we just make it #84BD00
    content = content.replace(/background:\s*linear-gradient\([^)]*#84BD00[^)]*\);/gi, 'background: #84BD00;');
    content = content.replace(/background:\s*radial-gradient\([^)]*#84BD00[^)]*\);/gi, 'background: transparent;'); // Or keep it if we just changed the rgba.
    
    // Convert remaining gradients. Since the prompt says "NO gradients", we strip them
    // but we have to be careful not to match masks.
    content = content.replace(/background:\s*linear-gradient[^;]+;/gi, (match) => {
      if (match.includes('transparent')) return match; // Keep grid lines if any
      return 'background: var(--color-primary);';
    });
    
    content = content.replace(/background-image:\s*linear-gradient[^;]+;/gi, (match) => {
      if (match.includes('transparent')) return match;
      return 'background-image: none; background-color: var(--color-primary);';
    });
  }

  // In JSX files, inline styles with gradients
  if (file.endsWith('.jsx')) {
    content = content.replace(/style=\{\{\s*background:\s*['"]linear-gradient[^'"]+['"]\s*\}\}/gi, `style={{ background: '#84BD00' }}`);
    content = content.replace(/gradient:\s*['"]linear-gradient[^'"]+['"]/gi, `gradient: "#84BD00"`);
  }

  if (content !== originalContent) {
    writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
