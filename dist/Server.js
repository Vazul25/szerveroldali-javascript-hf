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
        require('./routes/debtRoutes')(this.app);
        require('./routes/outsideRoutes')(this.app);
    }
    config() {
        this.app.use(express.static(path.join(__dirname, "../static")));
        console.log(__dirname);
        console.log(path.join(__dirname, "../static"));
        this.app.use(bodyParser.json());
        this.app.set("views", path.join(__dirname, "../views"));
        console.log(path.join(__dirname, "../views"));
        this.app.set("view engine", "ejs");
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
