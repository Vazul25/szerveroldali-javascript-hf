"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DebtRepository_1 = require("../Repository/DebtRepository");
const mongoose_1 = require("mongoose");
const iDebt_1 = require("../model_Interfaces/iDebt");
class DebtModel {
    constructor() {
        this._debtRepository = new DebtRepository_1.DebtRepository();
    }
    toObjectId(_id) {
        return mongoose_1.Types.ObjectId.createFromHexString(_id);
    }
    getAllDebtBetweenUsesrs(userId1, userId2, cb) {
        this._debtRepository.find({ $or: [
                { $and: [{ "debtor": this.toObjectId(userId1) }, { "debtee": this.toObjectId(userId2) }] },
                { $and: [{ "debtor": this.toObjectId(userId2) }, { "debtee": this.toObjectId(userId1) }] }
            ] }, cb);
    }
    getUserDebts(userId1, callback) {
        this._debtRepository.find({ $and: [{ $or: [{ "debtor": this.toObjectId(userId1) }, { "debtee": this.toObjectId(userId1) }] }, { "state": iDebt_1.DebtState.UnSettled }] }, callback);
    }
    getSettledDebtsForApprove(userId, callback) {
        this._debtRepository.find({ $and: [{ "debtee": this.toObjectId(userId) }, { "state": iDebt_1.DebtState.UnApproved }] }, callback);
    }
    approveDebts(debtIds, userId, callback) {
        let debtsToApprove = this.castToObjectIdArray(debtIds);
        this._debtRepository.updateAll({ $and: [{ "_id": { "$in": debtsToApprove } }, { "debtee": this.toObjectId(userId) }, { "state": iDebt_1.DebtState.UnApproved }] }, { "state": iDebt_1.DebtState.Settled }, { multi: true, upsert: false }, callback);
    }
    settleDebts(debtIds, userId, callback) {
        let debtsToSettle = this.castToObjectIdArray(debtIds);
        this._debtRepository.updateAll({ $and: [{ "_id": { "$in": debtsToSettle } }, { "debtor": this.toObjectId(userId) }, { "state": iDebt_1.DebtState.UnSettled }] }, { "state": iDebt_1.DebtState.UnApproved }, { multi: true, upsert: false }, callback);
    }
    castToObjectIdArray(ids) {
        let objIds = [];
        for (let objId in ids) {
            objIds.push(this.toObjectId(ids[objId]));
        }
        return objIds;
    }
    create(item, callback) {
        this._debtRepository.create(item, callback);
    }
    retrieve(callback) {
        this._debtRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._debtRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._debtRepository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this._debtRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._debtRepository.findById(_id, callback);
    }
    splitDebts(userId, debts) {
        let myDebts = [];
        let debtsToMe = [];
        for (let i in debts) {
            if (debts[i].debtee._id == userId)
                debtsToMe.push(debts[i]);
            else
                myDebts.push(debts[i]);
        }
        let result = { debtsToMe: debtsToMe, myDebts: myDebts };
        return result;
    }
}
exports.DebtModel = DebtModel;
