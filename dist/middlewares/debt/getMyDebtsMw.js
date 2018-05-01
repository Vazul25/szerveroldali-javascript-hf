"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = require("../../models/userSchema");
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    var userModel = requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        let item = new userSchema_1.UserSchemaModel();
        item.email = 'mock@gmail.com';
        item.fullName = "Test Elek";
        item.createdAt = new Date();
        item.nickName = 'Test';
        item.birthday = new Date();
        item.password = "AsDasd";
        userModel.create(item, function (err, result) {
            console.log(result);
            console.log(err);
            console.log("Created?");
        });
    };
};
