// file system文件系统对象
const fs = require('fs')
// http对象
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

// 创建服务器对象
const server = http.createServer()
server.on('request', (req, res)=> {
    console.log('请求来了！')
    // res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.write('请求返回Hello world')
    res.end()
})
// 启动服务
server.listen(3000, ()=> {
    console.log('启动服务')
})
