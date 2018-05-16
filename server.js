var  http = require("http");
var fs = require("fs");
var server= http.createServer(function(req,res){
	
	res.setHeader("Access-Control-Allow-Origin","*")

	res.writeHead(200,{"Content-type" : "text/html;charset=utf-8"})

    fs.readFile("Template/index1.html","utf8",function(err,data){
    	
		if(err){
			throw err
		}
		res.end(data)
		
	})
})
server.listen(4883)

