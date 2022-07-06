// membaca file dengan readFileSync Synchronous
const { readFileSync, writeFileSync } = require('fs');
const fs = require('fs')

const read1 = readFileSync('./content/cek.txt', 'utf-8')

const read2 = './content/subfolder/test.txt';

console.log(read1)

// membaca file dengan read fs metod Asynchronous
fs.readFile(read2, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
})
const tambahConten = 'ini tambah saya 123';

fs.writeFile(read2, tambahConten, err2 => {
    if (err2) {
        console.log(err);
        return
    }
    console.log('berhasil');

    fs.readFile(read2, 'utf-8', (err3, data3) => {
        if (err3) {
            console.log(err3);
            return;
        }
        console.log(data3);
    })
})