var koa = require('koa')

var app = koa();

var views = require('co-views');

var fs = require('fs')

var path = require('path')

var rs = fs.createReadStream(path.join(__dirname, './dist/index.html'))

var render = views(__dirname + '/dist', {
  map: { html: 'swig' }
});

var index = require.resolve('./dist/index.html')



app.use(require('koa-static')(__dirname + '/dist'));


app.use(function* (next) {
	this.type = 'html'
	this.body = rs
  // this.body = yield render('index');

})

app.listen(3002);