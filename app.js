var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var cors=require('cors');
var mysql=require("mysql");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  keys:['aa','bb'],
  name:'sess_id',
  maxAge:1000*60*10
}));
app.use(express.static(path.join(__dirname, 'public')));

//配置cors中间件
app.use(cors({
  "origin": ["http://localhost:8001"],  //允许所有前端域名
  "credentials":true,
  // "origin":  ["http://example1.com", /\.example2\.com$/],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

let db=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"root",
  database:"react-obj",
  port:3306
})

app.use('/indexnav', require("./routes/indexnav")(db));
app.use('/shangjia', require("./routes/shangjia")(db));
app.use('/goodslist', require("./routes/goodslist")(db));
app.use('/pingjia', require("./routes/pingjia")(db));
app.use('/shequ', require("./routes/shequ")(db));
app.use('/user', require("./routes/user")(db));
app.use('/reg', require("./routes/reg")(db));
app.use('/login', require("./routes/login")(db));
app.use('/tui', require("./routes/tui")(db));
app.use('/shopcar', require("./routes/shopcar")(db));
app.use('/shequAdd', require("./routes/shequAdd")(db));
app.use('/saveAdd', require("./routes/saveAdd")(db));
app.use('/jiaru', require("./routes/jiaru")(db));
app.use('/del', require("./routes/del")(db));
app.use('/clear', require("./routes/clear")(db));
app.use('/jia', require("./routes/jia")(db));
app.use('/jian', require("./routes/jian")(db));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
