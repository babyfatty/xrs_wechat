var koa = require('koa')

var app = koa();


var views = require('koa-view');

app.use(views(__dirname + '/dist'));
app.use(require('koa-static')(__dirname + '/dist'));

// app.use(function*(){
	// app.use(function *(){
	  // this.body = 'Hello World';
	// });
// })
app.use(function* (next) {
  yield this.render('index');
})

app.listen(3001);