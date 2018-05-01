"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("../Repository/userRepository");
class UserModel {
    constructor() {
        this._userRepository = new userRepository_1.UserRepository();
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
    filter(cond, callback) {
        this._userRepository.find(cond, callback);
    }
}
exports.UserModel = UserModel;
