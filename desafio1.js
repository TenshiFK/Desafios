const fs = require("fs");
const http = require("http");
const path = require("path")

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("home.html", function(err, data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
    else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, req.url);
        fs.readFile(cssPath, function(err, data){
            if (err) {
                res.writeHead(404, {"Content-Type": "text/css"});
                res.end("404 - Arquivo não encontrado");
            } else {
                res.writeHead(200, {"Content-Type": "text/css"});
                res.end(data);
            }
        });
    }
    else if(req.url === "/sobre"){
        fs.readFile("sobre.txt", function(err, data){
            res.writeHead(200, {"Content-Type": "text"});
            res.end(data);
        });
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<h1>Pagina não encontrada</h1>");
    }


}).listen(8000);