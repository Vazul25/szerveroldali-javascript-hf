"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataAccess = require("../db");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
exports.DebtSchema = new mongoose_1.Schema({
    date: Date,
    sum: Number,
    debtor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    debtee: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: String,
    state: Number,
    createdAt: Date
});
exports.DebtSchema.pre("save", function (next) {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.DebtSchemaModel = mongooseConnection.model("Debt", exports.DebtSchema);
