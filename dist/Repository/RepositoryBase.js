"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class RepositoryBase {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    updateAll(cond, updateTo, options, callback) {
        this._model.update(cond, updateTo, options, callback);
    }
    create(item, callback) {
        this._model.create(item, callback);
    }
    retrieve(callback) {
        this._model.find({}, callback);
    }
    update(_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    }
    delete(_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }
    find(cond, callback) {
        this._model.find(cond, callback);
    }
    findById(_id, callback) {
        this._model.findById(_id, callback);
    }
    findOne(cond, callback) {
        this._model.findOne(cond, callback);
    }
    insertMany(list, callback) {
        this._model.insertMany(list, callback);
    }
    toObjectId(_id) {
        return mongoose_1.Types.ObjectId.createFromHexString(_id);
    }
}
exports.RepositoryBase = RepositoryBase;
