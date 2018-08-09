var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var steem  = require('steem');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//steem.config.set('websocket','wss://159.89.101.56:9877');
//steem.config.set('uri','http://159.89.101.56:9877');
steem.config.set('address_prefix', 'WCN');
steem.config.set('chain_id', '79276aea5d4877d9a25892eaa01b0adf019d3e5cb12a97478df3298ccdd01673');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes'));

app.get('/:category/:api', function(req, res) {

    var api = req.params["api"];

    var category = req.params["category"];
    
    var apiObj = require("./routes/"+category);

    if(!apiObj.apiList[api]){

        res.status(404);
        apiObj.errorObj.data = "Wrong API";
        res.render('index', apiObj.errorObj);

    }

    apiObj.apiList[api].category = apiObj.category;

    if (!apiObj.apiList[api].query || apiObj.apiList[api].query.length <= 0){

        steem.api[api](function(error, result) {

            if (error){
                // error
                apiObj.errorObj.data = error;
                res.status(500).render('error', apiObj.errorObj);
            }
            else{

                apiObj.apiList[api].data = JSON.stringify(result, null, '   ');

                res.render('index', apiObj.apiList[api]);

            }
        });

    }

    if(apiObj.apiList[api].query && apiObj.apiList[api].query.length > 0) {

        var ind = 0;
        for (var i in req.query) {
            if(apiObj.apiList[api].query[ind].value){
                apiObj.apiList[api].query[ind].value =req.query[i];
            }
            ind++;
        }

        switch (apiObj.apiList[api].query.length) {
            case 1:
                steem.api[api](
                    apiObj.apiList[api].query[0].value,
                    function(error, result) {
                        if(error){
                            // error
                            apiObj.errorObj.data = error;
                            res.status(500).render('error', apiObj.errorObj);
                        }
                        else{

                            apiObj.apiList[api].data = JSON.stringify(result, null, '   ');

                            res.render('index', apiObj.apiList[api]);

                        }
                    });
                break;
            case 2:
                steem.api[api](
                    apiObj.apiList[api].query[0].value,
                    apiObj.apiList[api].query[1].value,
                    function(error, result) {
                        if(error){
                            // error
                            apiObj.errorObj.data = error;
                            res.status(500).render('error', apiObj.errorObj);
                        }
                        else{
                            apiObj.apiList[api].data = JSON.stringify(result, null, '   ');
                            res.render('index', apiObj.apiList[api]);
                        }

                    });
                break;
            case 3:
                steem.api[api](
                    apiObj.apiList[api].query[0].value,
                    apiObj.apiList[api].query[1].value,
                    apiObj.apiList[api].query[2].value,
                    function(error, result) {
                        if(error){
                            // error
                            apiObj.errorObj.data = error;
                            res.status(500).render('error', apiObj.errorObj);
                        }
                        else{
                            apiObj.apiList[api].data = JSON.stringify(result, null, '   ');
                            res.render('index', apiObj.apiList[api]);
                        }
                    });
                break;
            default:
                // error
                apiObj.errorObj.data = "Wrong number of get parameters";
                res.status(500).render('error', apiObj.errorObj);
                break;
        }
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
