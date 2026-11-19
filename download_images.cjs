const fs = require('fs');
const path = require('path');
const https = require('https');

const dirs = [
  'frontend/public/images/about',
  'frontend/public/images/services',
  'frontend/public/images/doctors',
  'frontend/public/images/facilities',
  'frontend/public/images/contact',
];

dirs.forEach(d => {
  const full = path.join(__dirname, d);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
});

const images = {
  // ABOUT
  'frontend/public/images/about/interior.jpg': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  'frontend/public/images/about/team.jpg': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80',
  'frontend/public/images/about/patient-care.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  'frontend/public/images/about/achievements.jpg': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',

  // SERVICES
  'frontend/public/images/services/cardiology.jpg': 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80',
  'frontend/public/images/services/gynecology.jpg': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80',
  'frontend/public/images/services/pediatrics.jpg': 'https://images.unsplash.com/photo-1632053002928-89c0a6b7e175?w=800&q=80',
  'frontend/public/images/services/orthopedics.jpg': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  'frontend/public/images/services/dermatology.jpg': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
  'frontend/public/images/services/general-medicine.jpg': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
  'frontend/public/images/services/xray.jpg': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
  'frontend/public/images/services/bloodtest.jpg': 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',

  // DOCTORS
  'frontend/public/images/doctors/doctor-1.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
  'frontend/public/images/doctors/doctor-2.jpg': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80',
  'frontend/public/images/doctors/doctor-3.jpg': 'https://images.unsplash.com/photo-1594824813589-9a748a6042db?w=800&q=80',
  'frontend/public/images/doctors/doctor-4.jpg': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
  'frontend/public/images/doctors/doctor-5.jpg': 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&q=80',
  'frontend/public/images/doctors/doctor-6.jpg': 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80',
  'frontend/public/images/doctors/doctor-7.jpg': 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
  'frontend/public/images/doctors/doctor-8.jpg': 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=800&q=80',

  // FACILITIES
  'frontend/public/images/facilities/icu.jpg': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
  'frontend/public/images/facilities/operation-theatre.jpg': 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
  'frontend/public/images/facilities/patient-rooms.jpg': 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
  'frontend/public/images/facilities/pharmacy.jpg': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800&q=80',
  'frontend/public/images/facilities/laboratory.jpg': 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
  'frontend/public/images/facilities/emergency.jpg': 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80',

  // CONTACT
  'frontend/public/images/contact/exterior.jpg': 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
  'frontend/public/images/contact/reception.jpg': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  'frontend/public/images/contact/patient-support.jpg': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
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
  console.log('Starting image downloads...');
  for (const [target, url] of Object.entries(images)) {
    const fullPath = path.join(__dirname, target);
    try {
      console.log(`Downloading ${target}...`);
      await download(url, fullPath);
      console.log(`✓ Saved ${target}`);
    } catch (e) {
      console.error(`✗ Error on ${target}:`, e.message);
    }
  }
  console.log('Finished downloading all images!');
}

run();
