"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        debtModel.getSettledDebtsForApprove(res.tpl.userId, function (err, result) {
            if (err) {
                return res.redirect('/home/');
            }
            console.log("ASD");
            console.log(result);
            res.tpl.debtsToApprove = result;
            return next();
        });
    };
};
