const fs = require('fs');
const path = require('path');

const dir = 'c:\\mindaxiss project\\SCREEN_SOURCE\\SCREEN_SOURCE';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Check for common hero section padding patterns with 0 20px or small top padding
  if (content.includes('.hero-films') || content.includes('.hero-section') || content.includes('.product-hero') || content.includes('.brand-hero')) {
    // Replace padding: 0 20px or padding: 40px 20px in hero classes
    content = content.replace(/(padding:\s*0\s+20px;)/g, (match) => {
      updated = true;
      return 'padding: 140px 20px 60px !important;';
    });
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated padding in ${file}`);
  }
});
