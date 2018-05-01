"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DebtRepository_1 = require("../Repository/DebtRepository");
class DebtModel {
    constructor() {
        this._debtRepository = new DebtRepository_1.DebtRepository();
    }
    getAllDebtBetweenUsesrs(userId1, userId2, cb) {
    }
    getUserDebts(userId1, cb) {
    }
    getSettledDebtsForApprove(userId, cb) {
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
            if (debts[i].debtor._id === userId)
                debtsToMe.push(debts[i]);
            else
                myDebts.push(debts[i]);
        }
        let result = { debtsToMe: debtsToMe, myDebts: myDebts };
        return result;
    }
}
exports.DebtModel = DebtModel;
