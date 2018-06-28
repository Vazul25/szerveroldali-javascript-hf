"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var userModel = requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        console.log(req.body.selectedUsers);
        res.tpl.selectedUsers = [];
        if (req.body && req.body.selectedUsers)
            console.log(req.body.selectedUsers);
        userModel.getAllUser(req.body.selectedUsers, function (err, result) {
            if (err || !result) {
                console.log(err);
                return next();
            }
            else {
                res.tpl.selectedUsers = result;
                if (res.tpl.users) {
                    res.tpl.users = res.tpl.users.filter(function (user) {
                        for (let i in result) {
                            if (user._id.toString() == result[i]._id.toString())
                                return false;
                        }
                        return true;
                    });
                }
            }
            return next();
        });
    };
};
