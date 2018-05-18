"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debtSchema_1 = require("../models/debtSchema");
const RepositoryBase_1 = require("./RepositoryBase");
const userRepository_1 = require("./userRepository");
class DebtRepository extends RepositoryBase_1.RepositoryBase {
    constructor() {
        super(debtSchema_1.DebtSchemaModel);
        this._userRepository = userRepository_1.UserRepository;
    }
    find(cond, callback) {
        this._model.find(cond).populate("debtor", "-password").populate("debtee", "-password").exec(callback);
    }
    findById(_id, callback) {
        this._model.findById(_id).populate("debtor", "-password").populate("debtee", "-password").exec(callback);
    }
    findOne(cond, callback) {
        this._model.findOne(cond).populate("debtor", "-password").populate("debtee", "-password").exec(callback);
    }
}
exports.DebtRepository = DebtRepository;
Object.seal(DebtRepository);
