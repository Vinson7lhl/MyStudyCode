// 获取express模块
const express = require('express')
// 创建服务对象
const app = express()
// 获取path对象
const path = require('path')
// 获取文件对象
const fs = require('fs')
// 获取模板模块,第一个参数确定模板扩展名，第二个是模板模块.注意：views文件夹是约定，模板必须放在此处 or 其子文件夹,但也可以改
app.engine('html', require('express-art-template'))
/**
 * 修改默认views路径
 * app.set('views', '你要的路径')
 * 下面将 views => pages
 */
app.set('views', path.join(__dirname, 'pages'))

// 对静态资源处理:这样就可以访问 localhost:3000/static/stylesheets/style.css
// 即前者参数是静态资源的映射别名
app.use('/static', express.static(path.join(__dirname, 'public')))

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');




// 设置
app.locals.title="My App";

// 路由事例(第一个参数地址还可以用正则表达式 //)

app.get('/',(req,res) => {
	// 注意：读取文件后的内容都是字符串，必须转码才行。
	fs.readFile('./public/fake_data/fake_data.json', (err,data) => {
		if (err) {
			return res.status(500).send('服务器错误！')
		}
		res.render('index_1.html', {
			title: '首页_1',
			content: 'hello 啊！',
			data_list: JSON.parse(data).data_list
		})
	})

	
    // res.send('hello Express！哈哈哈')
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

const port = 3000
app.listen(3000,() => {
    console.log(`这是node-express 在监听${port}端口`)
})