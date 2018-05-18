"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        debtModel.getSettledDebtsForApprove(req.session.userId, function (err, result) {
            if (err || !result) {
                res.tpl.debtstoAppove = [];
                return res.redirect('/home/');
            }
            res.tpl.debtsToApprove = result;
            return next();
        });
    };
};
