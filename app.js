var createError = require("http-errors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');  // add at the top 

var indexRouter = require('./routes/index');
var recipesRouter = require('./routes/recipes');

var authRouter = require("./routes/auth");

var app = express();

app.use(cors());  // add after 'app' is created
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/recipes', recipesRouter);

app.use("/api/recipes/auth/", authRouter);


  
  app.use(function (req, res, next) {
    next(createError(404));
  });
  
  app.use(function (err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    res.status(err.status || 500);
    res.send("error");
  });

module.exports = app;
