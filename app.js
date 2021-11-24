var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
var servicesRouter = require('./routes/services.routes');
var aptsRouter = require('./routes/apts.routes')
var authRouter = require('./routes/auth.routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var username = "rootadmin"
var password = "root"

const databaseUrl = `mongodb+srv://${username}:${password}@clusterulsa.p45ko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const databaseOptions = {

  useNewUrlParser: true,

  useUnifiedTopology: true

}

mongoose.connect(databaseUrl, databaseOptions);
mongoose.connection.on("error", console.error.bind(console, "connection error: "));
mongoose.connection.once("open", function () {  
    console.log("Connected successfully");
}, err => {
    if (err) throw err;
    console.log('%c⧭', 'color: #ff0000', err);
});

try{
  
  const redis = require("redis");
  const client = redis.createClient();

  const util = require('util');
  client.get = util.promisify(client.get)
  console.log('%c⧭', 'color: #00e600', "Redis conected");

} catch (err){
  console.log('%c⧭', 'color: #00a3cc', err);
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/services', servicesRouter);
app.use('/apts', aptsRouter);
app.use('/auth', authRouter);

module.exports = app;
