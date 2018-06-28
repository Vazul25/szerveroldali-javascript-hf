"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    var userModel = requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        return next();
    };
};
