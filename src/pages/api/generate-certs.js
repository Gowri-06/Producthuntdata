// import openssl from 'openssl';
export default function handler(req, res) {
const openssl = require('openssl');
const fs = require('fs');

const privateKeyFile = 'key.pem';
const certificateFile = 'cert.pem';

openssl.exec('genpkey', ['-algorithm', 'RSA', '-out', privateKeyFile, '-aes256'], (err) => {
  if (err) throw err;
  console.log(`Generated private key: ${privateKeyFile}`);

  openssl.exec('req', ['-new', '-x509', '-key', privateKeyFile, '-out', certificateFile, '-days', '365'], (err) => {
    if (err) throw err;
    console.log(`Generated certificate: ${certificateFile}`);

    fs.chmodSync(privateKeyFile, '600');
    console.log(`Changed permissions on ${privateKeyFile} to 600`);
  });
});

  }
