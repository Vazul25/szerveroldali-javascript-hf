"use strict";
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CM6UKU');

module.exports = mongoose;*/
var Mongoose = require("mongoose");
var DataAccess = /** @class */ (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect('mongodb://localhost:27017/CM6UKU');
        return this.mongooseInstance;
    };
    return DataAccess;
}());
DataAccess.connect();
module.exports = DataAccess;
