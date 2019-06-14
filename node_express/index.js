const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('你好啊，老七！')
})

app.listen(3000,() => {
    console.log('这是node-express 在监听3000端口')
})