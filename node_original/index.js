// file system文件系统对象
const FS = require('fs')
// http对象
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
    switch (req.url) {
        case '/index': {
            console.log('首页')
            page_name = '首页'
            break
        }
        case '/login': {
            console.log('登录')
            page_name = '登录页'
            break
        }
        case '/register': {
            console.log('注册')
            page_name = '注册页'
            break
        }
        default: {
            console.log('404')
            page_name = '404页'
        }
    }
    // 如果要在html页面打印出中文需要设置res编码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res.end('返回的路径是：' + req.url)
    res.end('页面名：' + page_name)
    res.end('显示')
})
// 启动服务，通过控制台 node index.js 启动，此处用3000端口，但可以用80端口，默认浏览器端口，这样就可以不用写localhost:3000
SERVER.listen(3000, () => {
    console.log('启动服务')
})
