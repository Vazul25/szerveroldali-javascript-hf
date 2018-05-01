import { Document, Schema, Model} from "mongoose";

import DataAccess = require("../db");
import {iDebt} from "../model_Interfaces/iDebt";
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export interface iDebtModel extends iDebt, Document {
    createdAt: Date;
}
export var DebtSchema: any =    new Schema({

    date:Date,
    sum:Number,
    debtor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    debtee:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comment:String,

    state:Number,

    createdAt: Date
});
DebtSchema.pre("save", function(next) {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
export var  DebtSchemaModel: Model<iDebtModel> =mongooseConnection.model<iDebtModel>("Debt", DebtSchema);