/**
 * Created by lihonglei_yf on 2015/5/25.
 */
var http=require("http");//内置的http模块，提供了http服务
var fs=require("fs");//fs模块提供了文件的I/O的功能
var path=require("path");//内置path模块，提供了和文件路径相关的服务
var mime=require("mime");//内置mime模块提供了：根据文件扩展名得出MIME类型的功能
var cache={};

//1、发送文件数据及错误响应；
//第一个是当文件不存在时发送404错误
function send404(response)
{
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write("Error  404 ,file not found!");
    response.end();
}


//提供文件数据服务
function sendFile(response,filePath,fileContents)
{
    response.writeHead(200,{"Content-Type":mime.lookup(path.basename(filePath))});
    response.end(fileContents);
}


//提供静态文件服务——控制器
function serveStatic(response,chache,absPath)
{
    if(chache[absPath])//首先判断文件是否在缓存中
    {
        sendFile(response,absPath,chache[absPath]);//若在缓存中：发送文件内容
    }
    else
    {   //若不在缓存中，从本地硬盘路径读取文件；并调入回调函数；
        fs.exists(absPath,function(exists)
        {
            //如果文件存在
            if(exists)
            {
                //读取文件内容
                fs.readFile(absPath,function(err,data)
                {
                    //读取失败——发送404
                    if(err)
                    {
                        send404()
                    }
                    //读取成功——放入缓存，然后发送文件
                    else
                    {
                        cache[absPath]=data;
                        sendFile(response,absPath,data);
                    }
                });
            }
            //如果文件在本地硬盘不存在，发送404
            else
            {
                send404(response);
            }
        });
    }
}

//2、创建http服务
//创建HTTP服务器逻辑
var server=http.createServer(function(request,response)
{
    var filePath=false;
    if(request.url="/")
    {
        filePath="public/index.html";
    }
    else
    {
        filePath="public"+request.url;
    }
    var absPath="./"+filePath;
    serveStatic(response,cache,absPath);

});
//3、启动服务
server.listen(3001,function()
{
    console.log("监听3001端口");
});
