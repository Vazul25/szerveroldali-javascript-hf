"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        console.log(req.session.userId);
        debtModel.getUserDebts(req.session.userId, function (err, result) {
            if (err || !result) {
                res.tpl.debts = { myDebts: [], debtsToMe: [] };
                return res.redirect('/home/');
            }
            let debts = debtModel.splitDebts(req.session.userId, result);
            res.tpl.debts = debts;
            return next();
        });
    };
};
