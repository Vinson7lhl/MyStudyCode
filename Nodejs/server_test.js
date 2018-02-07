var express =require("express");
var app=express();
/*
	处理静态资源js，css都在public文件夹下，但是我不想让用户看到，那通过express.static("public")方法，就可以屏蔽此层目录，
	也可以自定义一个虚拟静态目录，指向静态目录
	app.use("/temp",express.static("public"));
	http://localhost:3001/temp/images/test01.jpg
*/
//app.use(express.static("public"));
app.use("/temp",express.static("public"));
//get请求
app.get("/test/get",function(request,response){
	//__dirname 会得到根目录  D:\lhl\Source_Code\FE_workspace\Nodejs
	var option={
		root:__dirname +"/public/",
		dotfiles:"deny",
		headers:{
			"x-timesamp":Date.now(),
			"x-sent":true
		}
	};
	response.sendFile("responseFile.html",option,function(error){
		if(error){
			console.log("错误信息："+error);
			response.status(error.status).end();
		}
		else{
			console.log('成功');
		}
	});
});
/*
app.get("/test/get",function(request,response){
	response.send("这是一个get请求页面");
	response.sendFile();
});

app.post("/test/post",function(request,response){
	response.send("这是一个post请求页面");
});

app.put("/test/put",function(request,response){
	response.send("这是一个put请求页面");
});

app.delete("/test/delete",function(){
	response.send("这是一个delete请求页面");
});*/



var server=app.listen(3001,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("打印在控制台：host",host,port);
});