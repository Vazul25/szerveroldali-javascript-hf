"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require('body-parser');
const express = require("express");
const path = require("path");
var session = require('express-session');
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        require('./routes/debtRoutes')(this.app);
        require('./routes/outsideRoutes')(this.app);
    }
    config() {
        this.app.use(express.static(path.join(__dirname, "../static")));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.set("views", path.join(__dirname, "../views"));
        this.app.set("view engine", "ejs");
        this.app.use(session({
            secret: 'keyboard cat',
            cookie: {
                maxAge: 1 * 1 * 30 * 60 * 1000
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
    }
}
exports.Server = Server;
