"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("../Repository/userRepository");
const mongoose_1 = require("mongoose");
class UserModel {
    constructor() {
        this._userRepository = new userRepository_1.UserRepository();
    }
    castToObjectIdArray(ids) {
        let objIds = [];
        for (let objId in ids) {
            objIds.push(mongoose_1.Types.ObjectId.createFromHexString(ids[objId]));
        }
        return objIds;
    }
    getAllUser(idList, callback) {
        let userIds = this.castToObjectIdArray(idList);
        this._userRepository.find({ "_id": { "$in": userIds } }, callback);
    }
    create(item, callback) {
        this._userRepository.create(item, callback);
    }
    retrieve(callback) {
        this._userRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._userRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._userRepository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this._userRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._userRepository.findById(_id, callback);
    }
    find(cond, callback) {
        this._userRepository.find(cond, callback);
    }
    findOne(cond, callback) {
        this._userRepository.findOne(cond, callback);
    }
    findWithPassword(cond, callback) {
        this._userRepository.findByEmailWithPassword(cond, callback);
    }
}
exports.UserModel = UserModel;
