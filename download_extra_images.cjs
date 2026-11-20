const fs = require('fs');
const path = require('path');
const https = require('https');

const dirs = [
  'frontend/public/images/patients',
  'frontend/public/images/services',
  'frontend/public/images/facilities',
];

dirs.forEach(d => {
  const full = path.join(__dirname, d);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
});

const images = {
  'frontend/public/images/hero-doctor.jpg': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&q=80',
  'frontend/public/images/services/neurology.jpg': 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
  'frontend/public/images/facilities/diagnostic.jpg': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
  'frontend/public/images/patients/patient-1.jpg': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80',
  'frontend/public/images/patients/patient-2.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  'frontend/public/images/patients/patient-3.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', err => {
      reject(err);
    });
  });
}

async function run() {
  for (const [target, url] of Object.entries(images)) {
    const fullPath = path.join(__dirname, target);
    try {
      await download(url, fullPath);
      console.log(`✓ Saved ${target}`);
    } catch (e) {
      console.error(`✗ Error on ${target}:`, e.message);
    }
  }
}

run();
