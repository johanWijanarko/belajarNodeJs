const os = require('os')
    // display os pc 
const user = os.userInfo()

console.log(user);

console.log(`berapa runtime file ${os.uptime()} detik`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);