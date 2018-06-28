"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("../models/userSchema");
const RepositoryBase_1 = require("./RepositoryBase");
class UserRepository extends RepositoryBase_1.RepositoryBase {
    constructor() {
        super(userSchema_1.UserSchemaModel);
    }
    find(cond, callback) {
        this._model.find(cond, { password: 0 }, callback);
    }
    findById(_id, callback) {
        this._model.findById(_id, { password: 0 }, callback);
    }
    findOne(cond, callback) {
        this._model.findOne(cond, { password: 0 }, callback);
    }
    findByEmailWithPassword(cond, callback) {
        this._model.findOne(cond, callback);
    }
}
exports.UserRepository = UserRepository;
Object.seal(UserRepository);
