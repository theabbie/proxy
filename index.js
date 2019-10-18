var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer({secure:false});
 
app.all("/*", function(req, res) {
apiProxy.web(req, res, {target: req.query.url});
});

app.listen(process.env.PORT);
