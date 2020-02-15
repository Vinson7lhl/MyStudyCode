// 文件类
const fs = require('fs')
// 服务器类
const http = require('http')

// 读取写入文件
fs.readFile ('./test_read_file.txt', (err, data)=> {
    console.log(data)
})

fs.writeFile ('./test_write_file.txt', '写入Halo node-express', (err)=> {
    if (err) {
        console.log('情人劫写入失败')
    } else {
        console.log('情人节写入成功')
    }
})

// 服务器
