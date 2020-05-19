const source_data = require('./list')

// 获取 文件系统对象 模块
const FS = require('fs')
// 获取 http 模块
const HTTP = require('http')

// 读取写入文件
FS.readFile('./test_read_file.txt', (err, data) => {
    console.log(data)
})

FS.writeFile('./test_write_file.txt', '写入Halo node-express', (err) => {
    if (err) {
        console.log('情人劫写入失败')
    } else {
        console.log('情人节写入成功')
    }
})

// 创建服务器对象
const SERVER = HTTP.createServer()
SERVER.on('request', (req, res) => {
    console.log('请求来了！')
    let page_name = ''
    // 这个url是指端口号之后的所有字符串 比如访问：http://localhost:3000，实际为：http://localhost:3000/
    switch (req.url) {
        case '/index' : {
            FS.readFile('./pages/index.html', (err, data) => {
                if(err) {
                    // 如何跳转到404？？？
                    return res.end('404！！！')
                }
                // 如果要在html页面打印出中文需要设置res编码
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            })
            break
        }
        case '/list': {
            FS.readFile('./pages/list.html', (err, data) => {
                res.end(data)
            })
            break
        }
        default: {
            console.log('404',source_data.name)
            return res.end('404！！！')
        }
    }
    // res.end('返回的路径是：' + req.url)

})
// 启动服务，通过控制台 node index.js 启动，此处用3000端口，但可以用80端口，默认浏览器端口，这样就可以不用写localhost:3000
SERVER.listen(3000, () => {
    console.log('启动服务')
})
