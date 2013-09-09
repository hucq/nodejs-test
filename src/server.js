var http = require('http'),
    url  = require('url'),
    fs   = require('fs');


// server
http.createServer(function(req, res) {

    var dir   = __dirname,
        path  = url.parse(req.url).pathname,
        ftype, data;

    // 请求路径后缀
    ftype = (path.match(/\.([^.]+)$/) || [])[1] || '';

    // 文件映射
    data = ({
        'js'   : ['text/javascript', '/static_source/test.js'],
        'jpg'  : ['image/jpg',       '/static_source/test.jpg'],
        'html' : ['text/html',       '/static_source/test.html']
    })[ftype];

    if (!data) {
        return false;
    }

    // 将文件读入响应
    res.writeHead(200, {'Content-Type' : data[0]});
    fs.readFile(dir + data[1], function (err, data){
        res.end(data);
    });

}).listen(8080);

console.log('Sever running: "http://127.0.0.1:8080"');
