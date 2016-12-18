var koa = require('koa')

var app = koa();

app.use(require('koa-static')(__dirname + '/dist'));


app.listen(8080);