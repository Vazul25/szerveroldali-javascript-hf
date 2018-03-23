"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes = require('./routes/debtRoutes')(this.app);
        this.routes = require('./routes/outsideRoutes')(this.app);
        this.api();
    }
    api() {
    }
    config() {
        this.app.use(express.static("../static"));
        console.log(path.join(__dirname, "../static"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser("SECRET_GOES_HERE"));
        this.app.use(function (req, res, next) {
            res.tpl = {};
            res.error = [];
            return next();
        });
        this.app.use(function (error, req, res, next) {
            res.sendStatus(500);
            console.error(error.stack);
        });
    }
}
exports.Server = Server;
