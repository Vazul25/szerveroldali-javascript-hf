#!/usr/bin/env node
"use strict";

//module dependencies
var server = require("../dist/server");
var debug = require("debug")("express:server");
var http = require("http");

//create http server
var httpPort =  (process.env.PORT || 8080);
var app = server.Server.bootstrap().app;
var myServer=app.listen(3000, function () {
    console.log("Server is running on 3000");
});
