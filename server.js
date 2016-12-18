var koa = require('koa')

var app = koa();

var views = require('co-views');

var render = views(__dirname + '/dist', {
  map: { html: 'swig' }
});

app.use(require('koa-static')(__dirname + '/dist'));


app.use(function* (next) {
  console.log(1)

  this.body = render('index');
})

app.listen(3002);