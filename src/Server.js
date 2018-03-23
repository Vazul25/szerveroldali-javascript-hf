"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var path = require("path");
var Server = /** @class */ (function () {
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add routes
        this.routes();
        //add api
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.api = function () {
        //empty for now
    };
    Server.prototype.config = function () {
        this.app.use(function (req, res, next) {
            res.tpl = {};
            res.error = [];
            return next();
        });
        this.app.use(express.static(path.join(__dirname, "static")));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        //use cookie parser middleware
        this.app.use(cookieParser("SECRET_GOES_HERE"));
    };
    Server.prototype.routes = function () {
        //empty for now
    };
    return Server;
}());
exports.Server = Server;
