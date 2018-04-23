"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        debtModel.getMyDebts(res.tpl.userId, function (err, result) {
            if (err) {
                return res.redirect('/home/');
            }
            let debts = debtModel.splitDebts(res.tpl.userId, result);
            res.tpl.debts = debts;
            return next();
        });
    };
};
