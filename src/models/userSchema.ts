import { Document, Schema, Model, Types} from "mongoose";


import DataAccess = require("../db");
import {iUserModel} from "../model_Interfaces/iUser";
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export var UserSchema: any = new Schema({

    fullName:String,
    nickName:String,
    email:String,
    birthday:Date,
    password:String,
    createdAt: Date,
    purl:String
});
UserSchema.pre("save", function(next) {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
export var UserSchemaModel: Model<iUserModel> = mongooseConnection.model<iUserModel>("User", UserSchema);