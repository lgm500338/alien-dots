// 웹사이트 파일(상위 폴더)을 앱 안에 넣을 www 폴더로 복사
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..'), out = path.join(__dirname, 'www');
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out);
for (const f of ['index.html', 'manifest.json', 'privacy.html', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'])
  fs.copyFileSync(path.join(src, f), path.join(out, f));
console.log('copied web files to native/www');
