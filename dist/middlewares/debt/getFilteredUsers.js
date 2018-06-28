"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var userModel = requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        let filter = {};
        if (req.body.filter)
            filter = { "fullName": { $regex: req.body.filter, $options: "i" } };
        userModel.find(filter, function (err, result) {
            if (err || !result) {
                res.tpl.users = [];
                console.log(err);
            }
            else
                res.tpl.users = result;
            return next();
        });
    };
};
