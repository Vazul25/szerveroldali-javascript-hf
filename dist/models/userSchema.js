"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataAccess = require("../db");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
exports.UserSchema = new mongoose_1.Schema({
    fullName: String,
    nickName: String,
    email: String,
    birthday: Date,
    password: String,
    createdAt: Date,
    purl: String
});
exports.UserSchema.pre("save", function (next) {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.UserSchemaModel = mongooseConnection.model("User", exports.UserSchema);
