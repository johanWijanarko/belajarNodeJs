// fs file dengan calback promise 

// import fs from 'fs/promises';
const fs = require('fs/promises');

async function readFile() {
    const filename = ('./content/subfolder/test.txt');

    try {
        const data = await fs.readFile(filename, 'utf-8')
        console.log(data);

        const content = 'nambah data nih';
        await fs.writeFile(filename, content);
        console.log('berhasil ditambah');

        const data2 = await fs.readFile(filename, 'utf-8');
        console.log(data2);

    } catch (error) {

    }
}
readFile();