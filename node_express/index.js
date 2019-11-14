const express = require('express')
const app = express()

// 路由事例(第一个参数地址还可以用正则表达式 //)

app.get('/',(req,res) => {
    res.send('Get 请求_hello world')
})

app.post('/', function (req, res) {
	res.send('Post 请求')
})

app.put('/user', function (req, res) {
	res.send('put 请求')
})

app.delete('/user', function (req, res) {
	res.send('Delete 请求')
})

app.listen(3000,() => {
    console.log('这是node-express 在监听3000端口')
})