var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
 
app.all("/*", function(req, res) {
apiProxy.web(req, res, {target: req.query.url,changeOrigin: true});
});

app.listen(process.env.PORT);
