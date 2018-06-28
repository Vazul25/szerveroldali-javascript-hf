"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require('body-parser');
var express = require("express");
var path = require("path");
var session = require('express-session');
var Server = /** @class */ (function () {
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        require('./routes/debtRoutes')(this.app);
        require('./routes/outsideRoutes')(this.app);
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.use(express.static(path.join(__dirname, "../static")));
        // for parsing application/json
        this.app.use(bodyParser.json());
        // for parsing application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.set("views", path.join(__dirname, "../views"));
        this.app.set("view engine", "ejs");
        /* this.app.use(bodyParser.urlencoded({
             extended: true
         }));*/
        //use cookie parser middleware
        this.app.use(session({
            secret: 'keyboard cat',
            cookie: {
                maxAge: 600000
            },
            resave: true,
            saveUninitialized: false
        }));
        this.app.use(function (req, res, next) {
            res.tpl = {};
            res.error = [];
            res.tpl.error = [];
            return next();
        });
        this.app.use(function (error, req, res, next) {
            res.sendStatus(500);
            console.error(error.stack);
        });
    };
    return Server;
}());
exports.Server = Server;
