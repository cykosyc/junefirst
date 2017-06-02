"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var heros_1 = require("./app/roots/api/heros");
var villains_1 = require("./app/roots/api/villains");
var app = express();
var port = 8080;
mongoose.connect('mongodb://dcuser:dcpassword@ds161041.mlab.com:61041/dcpeople').then(function () {
    console.log('we\'re connected');
}).catch(function (err) {
    console.log('oops!');
});
app.use(express.static('./app/www'));
app.use('/api/heros', heros_1.default);
app.use('/api/villains', villains_1.default);
app.get('/', function (req, res, next) {
    res.sendfile('app/www/index.html');
});
app.get('/about', function (req, res, next) {
    res.sendfile('app/www/about.html');
});
app.get('*', function (req, res, next) {
    res.sendfile('app/www/404.html');
});
app.listen(port, function () {
    console.log('listening on port' + port);
});
