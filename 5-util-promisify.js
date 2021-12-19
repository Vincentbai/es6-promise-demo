/**
 * util promisify 将一个错误优先的回调函数转化成一个promise的版本
 */

const util = require('util')
const fs = require('fs')

let mineReadFile = util.promisify(fs.readFile)

mineReadFile('./resource/content.txt').then((value)=>{
    console.log(value.toString());
})