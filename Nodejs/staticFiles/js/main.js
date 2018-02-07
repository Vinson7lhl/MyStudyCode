/**
 * Created by lihonglei_yf on 2015/5/19.
 */

//模拟请求一个服务文件
var fs=require("fs");
fs.readFile("../resourse.json",function(er,data)
{
    console.log(data);
});

//服务器程序；任何响应都是hello world
var http=require("http");
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world\n');
}).listen(3000);
console.log("server running at http://localhost:3000");




