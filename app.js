const data = 12;

if (data > 10) {
    console.log('benar')
} else {
    console.log('salah')
}

console.log(`cek data yah`)

// cek interval setiap 10 detik
// setInterval(() => {
//     console.log('cek yah')
// }, 1000)
// import name dari file data1.js 
const name = require('./data1')

const sayHai = require('./data2')
const data3 = require('./data3')

// panggil fungsi di data 4 dengan require, maka hasilnya akn auto keluar bisa di panggil dengan lagsung require atau di masukkan dlu dalam variable

// langsung 
require('./data4')

// dimasikkan variabel 
const data4 = require('./data4')
console.log(data4)

const data1 = 'johan';
const data2 = 'johan2';

// cetak name yang di import dari data1.js di dalam varibel name 
console.log(name)
console.log(data3.singlePerson)
console.log(data3.items)

// data3('ini')
// cetak name dr data2 yang berisi function sayHai, dengan memasukkan parameter name.variabel
sayHai(name.rizki)
sayHai(name.anita)