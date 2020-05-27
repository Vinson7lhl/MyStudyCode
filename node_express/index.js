// 获取express模块
const express = require('express')
const path = require('path');

//创建express对象
const app = express()


// 设置
app.locals.title="My App";

// 路由事例(第一个参数地址还可以用正则表达式 //)

app.get('/',(req,res) => {
    res.send('hello Express！哈哈哈')
})

// 对静态资源处理:这样就可以访问 localhost:3000/static/stylesheets/style.css
// 即前者参数是静态资源的映射别名
app.use('/static', express.static(path.join(__dirname, 'public')))

app.post('/', function (req, res) {
	res.send('Post 请求')
})

app.put('/user', function (req, res) {
	res.send('put 请求')
})

app.delete('/user', function (req, res) {
	res.send('Delete 请求')
})

const port = 3000
app.listen(3000,() => {
    console.log(`这是node-express 在监听${port}端口`)
})