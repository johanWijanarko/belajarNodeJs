// untuk mencari folder 
const path = require('path')

// tracking file test dengan joining folder tempat menyimpan
const filePath = path.join('/content', 'subfolder', 'test.txt')

const base = path.basename(filePath);

const absolut = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(filePath);
console.log(base);
console.log(absolut);