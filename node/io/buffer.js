const buf1 = Buffer.alloc(10)
console.log(buf1)//<Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer
    .from('A')//不支持数字
console.log(buf2,buf2.toString())//<Buffer 41> A

const buf3 = Buffer.from('啊')
console.log(buf3,buf3.toString())//<Buffer e5 95 8a> 啊

const buf4 = Buffer.concat([buf2,buf3])
console.log(buf4,buf4.toString())//<Buffer 41 e5 95 8a> A啊

