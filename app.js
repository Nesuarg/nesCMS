var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var mongoose = require('mongoose');
var dbname = 'nesData';
var User = require('./models/user');
var authConfig = require('./config/authConfig')

mongoose.connect('mongodb://<nesdata>:<hellonesuarg>@ds017193.mlab.com:17193/nescms' + dbname);
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function (callback) {
    console.log('MongoDB connection established to ' + dbname);
});


var admin = require('./routes/admin');
var users = require('./routes/users');
var content = require('./routes/content');
var auth = require('./routes/auth');
var login = require('./routes/login');

//flyttes til auth config


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public/admin'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    secret: 'BrokeBack'
    ,resave: false
    ,saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/admin/', admin);
app.use('/api/users', users);
app.use('/api/content', content);
app.use('/api/auth', auth);
app.use('/api/login', login);


// PassportJS Configuration

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({
            username: username
            
        }, function (err, user) {
            console.log(user)
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username or password.'
                });
            }

            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message
            , error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message
        , error: {}
    });
});


module.exports = app;