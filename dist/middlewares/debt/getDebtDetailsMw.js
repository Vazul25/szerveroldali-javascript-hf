"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    var userModel = requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        userModel.findOne({ "_id": req.params.id }, function (err, result) {
            res.tpl.usersDetails = result;
            debtModel.getAllDebtBetweenUsesrs(req.session.userId, req.params.id, function (err, result) {
                if (err || !result) {
                    console.log(err);
                    console.log("error happened");
                    res.tpl.error.push("db error with geting the details");
                    res.tpl.debts = { myDebts: [], debtsToMe: [] };
                    return next();
                }
                let debts = debtModel.splitDebts(req.session.userId, result);
                res.tpl.debts = debts;
                return next();
            });
        });
    };
};
