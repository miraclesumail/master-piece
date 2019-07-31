var JSZip = require("jszip");
var fs = require("fs");
var path = require("path");
const { Transform } = require('stream');
const crypto = require("crypto");
const zlib = require('zlib');

// var readStream = fs.createReadStream('./test1.txt');
// const writeStream = fs.createWriteStream('./newfile.txt');
// readStream.on('data', (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });
// var zip = new JSZip();
// // zip.file("file.json", fs.readFileSync(path.resolve(__dirname, '../package.json')));
// zip.file("filess.dmg", fs.createReadStream(path.resolve(__dirname, './qwe.dmg')));
// zip
// .generateNodeStream({type:'nodebuffer',streamFiles:true})
// .pipe(fs.createWriteStream('wcnm.zip'))
// .on('finish', function () {
//     // JSZip generates a readable stream with a "end" event,
//     // but is piped here in a writable stream which emits a "finish" event.
//     console.log("out.zip written.");
// });

function getCipherKey(password) {
  return crypto.createHash('sha256').update(password).digest();
}

const AppendInitVect = require('./appendInitVect');

function encrypt({ file, password }) {
  // Generate a secure, pseudo random initialization vector.
  const initVect = crypto.randomBytes(16);
  
  // Generate a cipher key from the password.
  const CIPHER_KEY = getCipherKey(password);
  const readStream = fs.createReadStream(file);
  const gzip = zlib.createGzip({ level: 9 });
  const cipher = crypto.createCipheriv('aes256', CIPHER_KEY, initVect);
  const appendInitVect = new AppendInitVect(initVect);
  // Create a write stream with a different file extension.
  const writeStream = fs.createWriteStream(path.join(file + ".enc"));
  
  readStream
    .pipe(gzip)
    .pipe(cipher)
    .pipe(appendInitVect)
    .pipe(writeStream);
}

encrypt({ file: './qwe.dmg', password: 'dogzrgr8' });
